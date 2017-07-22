angular.module('timbreo')
        .factory('PreguntasCampana', function () {
            return {
                1: {
                    tipo: 'simple.estado',
                    texto: '¿Cómo evaluás hasta el momento la gestión del Intendente Sebastián Abella?',
                    opciones: [
                        {"B": "Buena", "R": "Regular", "M": "Mala"}
                    ]
                },
                2: {
                    tipo: 'simple.estado',
                    texto: '¿Qué imagen tenés de él?',
                    opciones: [
                        {"B": "Buena", "R": "Regular", "M": "Mala"}
                    ]
                },
                3: {
                    tipo: 'simple.estado',
                    texto: '¿Con qué partido o frente político se identifica?',
                    opciones: [
                        {"Cambiemos": "Cambiemos"},
                        {"FPV": "Unidad Ciudadana/FPV"},
                        {"Frente Renovador": "Frente Renovador"},
                        {"Izquierda": "Izquierda"},
                        {"Otro": "de Otro", "NS/NC": "NS/NC"}
                    ]
                },
                4: {
                    tipo: 'multiple.estado',
                    max: 3,
                    texto: 'Indique los 3 temas que más le preocupan de la Ciudad de este listado.',
                    opciones: [
                        {'Inseguridad': 'Inseguridad', 'Desempleo': 'Desempleo'},
                        {'Luminarias': 'Luminarias', 'Cloacas': 'Cloacas'},
                        {'Falta de vivienda': 'Falta de vivienda', 'Educación': 'Educación'},
                        {'Servicio de Absa': 'Servicio de Absa', 'Contaminación': 'Contaminación'},
                        {'Mal estado del barrio': 'Mal estado del barrio'},
                        {'Tránsito/transporte': 'Tránsito/transporte'},
                        {'Salud': 'Salud (estado de los Hospitales)'}
                    ]
                },
                5: {
                    tipo: 'simple.estado',
                    texto: '¿Nota que hay mayores obras en el municipio desde el cambio de gobierno?',
                    opciones: [
                        {"Si": "Si", "No": "No"}
                    ]
                }
            };
        });