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
                    texto: '¿Cuál dirías que es la principal problemática del Municipio?',
                    opciones: [
                        {'Inflacion': 'Inflación', 'Seguridad': 'Seguridad'},
                        {'Corrupcion': 'Corrupción', 'Educacion': 'Educación'},
                        {'Empleo': 'Empleo', 'Pobreza': 'Pobreza', 'Salud': 'Salud'}
                    ]
                },
                3: {
                    tipo: 'simple.estado',
                    texto: 'Si las elecciones fueran hoy, ¿a los candidatos de quién votarías?',
                    opciones: [
                        {"Cambiemos": "de María Eugenia Vidal y Sergio Roses"},
                        {"Union Ciudadana": "de Cristina y Ruben Romano"},
                        {"Cumplir": "de Randazzo y Raul 'Ruli' Galarza"},
                        {"Frente Renovador": "de Massa y Juan Gione"},
                        {"Otro": "de Otro", "NS/NC": "NS/NC"}
                    ]
                },
                4: {
                    tipo: 'simple.estado',
                    texto: '¿Qué imagen tenés de Sebastiá Abella?',
                    opciones: [
                        {"B": "Buena", "R": "Regular", "M": "Mala"}
                    ]
                },
                5: {
                    tipo: 'simple.estado',
                    texto: '¿Conocés por los medios a Sergio Roses?',
                    opciones: [
                        {"Si": "Si", "No": "No"}
                    ]
                }
            };
        });