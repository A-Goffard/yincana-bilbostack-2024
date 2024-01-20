document.addEventListener('DOMContentLoaded', function () {
    var formulariosCompletos = 0;

    var forms = document.querySelectorAll('form');

    forms.forEach(function (formulario) {
        formulario.addEventListener('submit', function (event) {
            event.preventDefault();
            var formId = formulario.id;
            verificarString(getCadenaEsperada(formId), getResultId(formId), formId);
        });
    });

    function verificarString(cadenaEsperada, resultadoId, formId) {
        var inputString = document.querySelector('#' + formId + ' input[type="text"]').value;

        if (inputString === cadenaEsperada) {
            mostrarResultado(obtenerMensajeCorrecto(formId), resultadoId, '#ABDB2A');
            formulariosCompletos++;

            if (formulariosCompletos === forms.length) {
                document.getElementById('btnIrAOtraPagina').style.display = 'block';
            }
        } else {
            mostrarResultado('Sigue intentándolo. ', resultadoId, 'red');
        }
    }

    function mostrarResultado(mensaje, resultadoId, color) {
        document.getElementById(resultadoId).textContent = mensaje;
        document.getElementById(resultadoId).style.color = color;
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

    function getCadenaEsperada(formId) {
        switch (formId) {
            case 'formulario1':
                return 'CODER';
            case 'formulario2':
                return 'Eres el futuro de la programación';
            case 'formulario3':
                return 'Disfruta del proceso de aprender';
            case 'formulario4':
                return 'Haz buenas amistades';
            case 'formulario5':
                return 'Comparte';
            case 'formulario6':
                return 'No te rindas';
            case 'formulario7':
                return 'Y el poder del código te acompañará';
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

    // Añade un evento de clic al botón btnIrAOtraPagina
    document.getElementById('btnIrAOtraPagina').addEventListener('click', function () {
        // Redirige a otraPagina.html
        window.location.href = '/otraPagina.html';
    });

});

