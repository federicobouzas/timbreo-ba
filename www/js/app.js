// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('timbreo', ['ionic', 'ngCordova'])

        .run(function ($ionicPlatform, $rootScope) {
            //$rootScope.remoteURL = 'http://eideoos.com:5984/timbreo-merlo';
            $rootScope.remoteURL = ' http://secdes.sytes.net:5984/timbreo-merlo';
            $ionicPlatform.ready(function () {
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                    // for form inputs)
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                    // Don't remove this line unless you know what you are doing. It stops the viewport
                    // from snapping when text inputs are focused. Ionic handles this internally for
                    // a much nicer keyboard experience.
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
            var dbLocal = new PouchDB('timbreo-merlo');
            dbLocal.destroy();
            $rootScope.user = {};
            $scope.login = function () {
                var errores = [];
                if (!$rootScope.user.identificacion || $rootScope.user.identificacion == "") {
                    errores.push("- Identificación requerida.");
                }
                if (errores.length) {
                    $ionicPopup.alert({
                        title: '¡Error de Ingreso!',
                        template: '<ul><li>' + errores.join('</li><li>') + '</li></ul>',
                        buttons: [{text: '<b>OK</b>', type: 'button-balanced'}]
                    });
                    return;
                }
                $state.go("timbreo");
            };
        })

        .controller('TimbreoController', function ($ionicScrollDelegate, $rootScope, $scope, PouchDB, $ionicPopup, $timeout, $state) {
            var dbLocal = new PouchDB('timbreo');
            PouchDB.replicate(dbLocal, $rootScope.remoteURL, {live: true, retry: true});
            $scope.preguntas = {
                1: {
                    tipo: 'simple.estado',
                    texto: '¿Conoce por los medios a la Gobernadora María Eugenia Vidal?',
                    opciones: {"Si": "Si", "No": "No"}
                },
                2: {
                    tipo: 'simple.estado',
                    texto: '¿Qué opinión tiene de ella?',
                    opciones: {"B": "Buena", "R": "Regular", "M": "Mala"}
                },
                3: {
                    tipo: 'simple.estado',
                    texto: '¿Confía en la gestión de la Gobernadora a lo largo de estos años que le quedan de gestión?',
                    opciones: {"Si": "Si", "No": "No"}
                },
                4: {
                    tipo: 'simple.estado',
                    texto: 'Independientemente de la opinión de la Gobernadora, ¿confía en el Gobierno Nacional y en su gestión en general?',
                    opciones: {"Si": "Si", "No": "No"}
                },
                5: {
                    tipo: 'simple.estado',
                    texto: '¿Cómo es para usted la gestión del actual Intendente?',
                    opciones: {"B": "Buena", "R": "Regular", "M": "Mala"}
                },
                6: {
                    tipo: 'simple.estado',
                    texto: '¿Nota que hay mayores obras en el municipio desde el cambio de Gobierno Provincial?',
                    opciones: {"Si": "Si", "No": "No"}
                },
                7: {
                    tipo: 'simple.estado',
                    texto: '¿Sabe que este año hay elecciones?',
                    opciones: {"Si": "Si", "No": "No"}
                },
                8: {
                    tipo: 'simple.estado',
                    texto: '¿Sabe qué es lo que se elige en su distrito?',
                    opciones: {"Si": "Si", "No": "No"}
                },
                9: {
                    tipo: 'simple.estado',
                    texto: '¿Y en la Provincia?',
                    opciones: {"Si": "Si", "No": "No"}
                },
                10: {
                    tipo: 'simple.estado',
                    texto: '¿Y a nivel Nacional?',
                    opciones: {"Si": "Si", "No": "No"}
                },
            };
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
