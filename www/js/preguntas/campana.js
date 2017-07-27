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
                    texto: 'Si las elecciones fueran hoy, ¿a los candidatos de quién votarías para Consejal?',
                    opciones: [
                        {"Cambiemos": "María Eugenia, Abella y Sergio Roses"},
                        {"Unidad Ciudadana (Ruben Romano)": "Cristina y Ruben Romano"},
                        {"Unidad Ciudadana (Alejo Sarna)": "Cristina y Alejo Sarna"},
                        {"Cumplir": "Randazzo y Raul 'Ruli' Galarza"},
                        {"1 País": "Massa y Juan Gione"},
                        {"Frente Izquierda": "Guillermo Bentacur (Frente Izquierda)"},
                        {"UV": "Axel Cantlon (UV)"},
                        {"VAMOS": "Lautaro Rios (VAMOS)"},
                        {"Frente CREO": "Carlos Fornarini (Frente CREO)"},
                        {"Frente Socialista y Popular": "Martín Nobúa (Frente Socialista y Popular)"},
                        {"Otro": "Otro", "NS/NC": "NS/NC"}
                    ]
                },
                4: {
                    tipo: 'multiple.estado',
                    max: 3,
                    texto: 'Indique los 3 temas que más le preocupan de la Ciudad de este listado.',
                    opciones: [
                        {'Inseguridad': 'Inseguridad', 'Desempleo': 'Desempleo'},
                        {'Luminarias': 'Luminarias', 'Cloacas': 'Cloacas'},
                        {'Falta de vivienda': 'Falta de Vivienda', 'Educación': 'Educación'},
                        {'Servicio de Absa': 'Servicio de Absa', 'Contaminación': 'Contaminación'},
                        {'Espacio Público': 'Espacio Público', 'Higiene': 'Higiene'},
                        {'Tránsito/transporte': 'Tránsito/Transporte', 'Salud': 'Salud/Hospitales'},
                        {'Mal estado del barrio': 'Mal Estado del Barrio'}
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