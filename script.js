document.addEventListener('DOMContentLoaded', function () {
    var formulariosCompletos = 0;
    var forms = document.querySelectorAll('form');

    forms.forEach(function (formulario) {
        formulario.addEventListener('submit', function (event) {
            event.preventDefault();
            var formId = formulario.id;
            verificarString(getCadenasEsperadas(formId), getResultId(formId), formId);
        });
    });

    function verificarString(cadenasEsperadas, resultadoId, formId) {
        var inputString = document.querySelector('#' + formId + ' input[type="text"]').value;
        var coincidencia = cadenasEsperadas.some(function (cadena) {
            return inputString.toLowerCase() === cadena.toLowerCase();
        });

        if (coincidencia) {
            mostrarResultado(obtenerMensajeCorrecto(formId), resultadoId, '#ABDB2A');
            formulariosCompletos++;

            if (formulariosCompletos === forms.length) {
                document.getElementById('btnIrAOtraPagina').style.display = 'block';
            }
        } else {
            mostrarResultado('Sigue intentándolo. ', resultadoId, 'red');
        }
    }

    function getCadenasEsperadas(formId) {
        switch (formId) {
            case 'formulario1':
                return ['CODER'];
            case 'formulario2':
                return ['Eres el futuro de la programación', 'eres el futuro de la programacion', 'eres el futuro de la programación', 'Eres el futuro de la programacion', 'ERES EL FUTURO DE LA PROGRAMACION', 'ERES EL FUTURO DE LA PROGRAMACIÓN'];
            case 'formulario3':
                return ['Disfruta del proceso de aprender', 'disfruta del proceso de aprender', 'DISFRUTA DEL PROCESO DE APRENDER'];
            case 'formulario4':
                return ['Haz buenas amistades', 'haz buenas amistades', 'HAZ BUENAS AMISTADES'];
            case 'formulario5':
                return ['Comparte', 'comparte', 'COMPARTE'];
            case 'formulario6':
                return ['No te rindas', 'NO TE RINDAS', 'no te rindas'];
            case 'formulario7':
                return ['El poder del código te acompañará', 'el poder del código te acompañará', 'El poder del codigo te acompañara', 'el poder del codigo te acompañara', 'EL PODER DEL CODIGO TE ACOMPAÑARA', 'EL PODER DEL CÓDIGO TE ACOMPAÑARÁ'];
            default:
                return [];
        }
    }

    function obtenerMensajeCorrecto(formId) {
        switch (formId) {
            case 'formulario1':
                return '¡Bien! Podemos seguir entonces...';
            case 'formulario2':
                return 'Vamos bien. A por lo siguiente.';
            case 'formulario3':
                return 'Se te da bien esto...';
            case 'formulario4':
                return '¿Trabajas en equipo?';
            case 'formulario5':
                return 'Ya te falta menos';
            case 'formulario6':
                return '¡Eres la caña! A por la última...';
            case 'formulario7':
                return '¡Genial! Ya lo tienes todo.... o tal vez no....';
            default:
                return '';
        }
    }

    function getResultId(formId) {
        switch (formId) {
            case 'formulario1':
                return 'resultado1';
            case 'formulario2':
                return 'resultado2';
            case 'formulario3':
                return 'resultado3';
            case 'formulario4':
                return 'resultado4';
            case 'formulario5':
                return 'resultado5';
            case 'formulario6':
                return 'resultado6';
            case 'formulario7':
                return 'resultado7';
            default:
                return '';
        }
    }

    function mostrarResultado(mensaje, resultadoId, color) {
        document.getElementById(resultadoId).textContent = mensaje;
        document.getElementById(resultadoId).style.color = color;
    }

    // Añade un evento de clic al botón btnIrAOtraPagina
    document.getElementById('btnIrAOtraPagina').addEventListener('click', function () {
        // Redirige a otraPagina.html
        window.location.href = "/otraPagina.html";
    });
});
