angular.module('timbreo')
        .factory('PreguntasMerlo', function () {
            return {
                1: {
                    tipo: 'simple.estado',
                    texto: '¿Conoce por los medios a la Gobernadora María Eugenia Vidal?',
                    opciones: [
                        {"Si": "Si", "No": "No"}
                    ]
                },
                2: {
                    tipo: 'simple.estado',
                    texto: '¿Qué opinión tiene de ella?',
                    opciones: [
                        {"B": "Buena", "R": "Regular", "M": "Mala"}
                    ]
                },
                3: {
                    tipo: 'simple.estado',
                    texto: '¿Confía en la gestión de la Gobernadora a lo largo de estos años que le quedan de gestión?',
                    opciones: [
                        {"Si": "Si", "No": "No"}
                    ]
                },
                4: {
                    tipo: 'simple.estado',
                    texto: 'Independientemente de la opinión de la Gobernadora, ¿confía en el Gobierno Nacional y en su gestión en general?',
                    opciones: [
                        {"Si": "Si", "No": "No"}
                    ]
                },
                5: {
                    tipo: 'simple.estado',
                    texto: '¿Cómo es para usted la gestión del actual Intendente?',
                    opciones: [
                        {"B": "Buena", "R": "Regular", "M": "Mala"}
                    ]
                },
                6: {
                    tipo: 'simple.estado',
                    texto: '¿Nota que hay mayores obras en el municipio desde el cambio de Gobierno Provincial?',
                    opciones: [
                        {"Si": "Si", "No": "No"}
                    ]
                },
                7: {
                    tipo: 'simple.estado',
                    texto: '¿Sabe que este año hay elecciones?',
                    opciones: [
                        {"Si": "Si", "No": "No"}
                    ]
                },
                8: {
                    tipo: 'simple.estado',
                    texto: '¿Sabe qué es lo que se elige en su distrito?',
                    opciones: [
                        {"Si": "Si", "No": "No"}
                    ]
                },
                9: {
                    tipo: 'simple.estado',
                    texto: '¿Y en la Provincia?',
                    opciones: [
                        {"Si": "Si", "No": "No"}
                    ]
                },
                10: {
                    tipo: 'simple.estado',
                    texto: '¿Y a nivel Nacional?',
                    opciones: [
                        {"Si": "Si", "No": "No"}
                    ]
                },
                11: {
                    tipo: 'simple.estado',
                    texto: 'Si las elecciones fueran hoy, ¿a los candidatos de quién votarías?',
                    opciones: [
                        {"Cambiemos": "de María Eugenia Vidal"},
                        {"Union Ciudadana": "de Cristina y Menendez"},
                        {"Cumplir": "de Randazzo y Othacehe"},
                        {"Frente Renovador": "de Massa"},
                        {"Otro": "de Otro", "NS/NC": "NS/NC"}
                    ]
                }
            };
        });