
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

/* Enviar correo */
$(document).ready(function() {
    $("#enviarCorreo").click(function() {
        alert("El correo fue enviado correctamente...");
    });
});

/* Doble-clik */
$(document).ready(function() {
    $("h2").dblclick(function() {
        $(this).css("color", "red");
    });
});

/* Toggle */
$(document).ready(function() {
    $(".card-title").click(function() {
        $(this).siblings(".card-body").toggle();
    });
});