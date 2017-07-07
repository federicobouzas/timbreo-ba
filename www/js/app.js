angular.module('timbreo', ['ionic', 'ngCordova'])

        .run(function ($ionicPlatform, $rootScope) {
            $rootScope.remoteURL = "https://couchdb.timbrea.me/";
            $rootScope.partidos = ["merlo", "campana"];
            $ionicPlatform.ready(function () {
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);
                }
                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }
            });
        })

        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                    .state('timbreo', {
                        url: '/timbreo',
                        templateUrl: 'templates/timbreo.html'
                    })
                    .state('login', {
                        url: '/login',
                        templateUrl: 'templates/login.html'
                    });
            $urlRouterProvider.otherwise('/login');
        })

        .factory('PouchDB', function () {
            return PouchDB;
        })

        .controller('LoginController', function ($ionicPopup, $rootScope, $scope, $state, PouchDB) {
            $rootScope.user = {};
            $rootScope.partido = "";
            $scope.partidoAutomatico = false;
            $scope.login = function () {
                var errores = [];
                if (!$rootScope.user.identificacion || $rootScope.user.identificacion == "") {
                    errores.push("- Identificación requerida.");
                }
                if ($rootScope.partido == "") {
                    errores.push("- Seleccione un Partido.");
                }
                if (errores.length) {
                    $ionicPopup.alert({
                        title: '¡Error de Ingreso!',
                        template: '<ul><li>' + errores.join('</li><li>') + '</li></ul>',
                        buttons: [{text: '<b>OK</b>', type: 'button-balanced'}]
                    });
                    return;
                }
                (new PouchDB('timbreo-' + $rootScope.partido)).destroy().then(function () {
                    $state.go("timbreo");
                });
            };
            $scope.seleccionarPartido = function (partido) {
                $rootScope.partido = partido;
            };
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log("ok GEO");
                var geocoder = new google.maps.Geocoder;
                //var latlngMerlo = {lat: -34.6751447, lng: -58.7604686};
                //var latlngCampana = {lat: -34.1633346, lng: -58.9592643};
                var latlng = {lat: parseFloat(position.coords.latitude), lng: parseFloat(position.coords.longitude)};
                geocoder.geocode({'location': latlng}, function (results, status) {
                    if (status === 'OK') {
                        for (var i in results) {
                            if (results[i].types[0] == "administrative_area_level_2") {
                                var partido = results[i].address_components[0].long_name.toLowerCase();
                                if ($scope.partidos.indexOf(partido) !== -1) {
                                    $scope.partidoAutomatico = true;
                                    $rootScope.partido = partido;
                                    $rootScope.$apply();
                                }
                                break;
                            }
                        }
                    }
                });
            }, function (error) {
                console.log('code: ' + error.code + '\nmessage: ' + error.message + '\n');
            });
        })

        .controller('TimbreoController', function ($ionicScrollDelegate, $rootScope, $scope, PouchDB,
                $ionicPopup, $timeout, $state, PreguntasMerlo, PreguntasCampana) {
            var dbLocal = new PouchDB('timbreo-' + $rootScope.partido);
            PouchDB.replicate(dbLocal, $rootScope.remoteURL + 'timbreo-' + $rootScope.partido, {live: true, retry: true});
            $scope.preguntas = $rootScope.partido == "merlo" ? PreguntasMerlo : PreguntasCampana;
            var resetForm = function () {
                $scope.formulario = {user: $rootScope.user, position: {}, respuestas: {}};
            };
            $scope.seleccionar = function (numero, valor) {
                $scope.formulario.respuestas[numero] = valor;
            };
            $scope.seleccionarMultiple = function (numero, seccion, valor) {
                $scope.formulario.respuestas[numero] = $scope.formulario.respuestas[numero] || {};
                $scope.formulario.respuestas[numero][seccion] = valor;
            };
            $scope.exit = function () {
                $rootScope.user = {};
                $state.go("login");
            };
            $scope.capitalizeFirstLetter = function (string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            };
            $scope.guardar = function () {
                var formulario = $scope.formulario;
                formulario.time = new Date().getTime();
                console.log("start GEO");
                navigator.geolocation.getCurrentPosition(function (position) {
                    console.log("ok GEO");
                    formulario.position.latitude = position.coords.latitude;
                    formulario.position.longitude = position.coords.longitude;
                    dbLocal.post(formulario);
                }, function (error) {
                    console.log('code: ' + error.code + '\nmessage: ' + error.message + '\n');
                    dbLocal.post(formulario);
                });
                var alertPopup = $ionicPopup.alert({
                    title: '¡Formulario guardado!',
                    template: '<div class="thumbs-up"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></div>',
                    buttons: []
                });
                $ionicScrollDelegate.scrollTop();
                $timeout(function () {
                    alertPopup.close();
                }, 3000);
                resetForm();
            };
            resetForm();
        });