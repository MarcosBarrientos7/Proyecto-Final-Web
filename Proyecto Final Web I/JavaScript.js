function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active'); // alterna la clase active
}


// FORMULARIOOO
// Obtener el formulario
const formulario = document.getElementById('formulario-contacto');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se envíe automáticamente

    // Obtener los valores
    const nombre = formulario.querySelector('input[type="text"]').value.trim();
    const email = formulario.querySelector('input[type="email"]').value.trim();
    const mensaje = formulario.querySelector('textarea').value.trim();

    // Validación básica
    if (nombre === "") {
        alert("Por favor ingresa tu nombre.");
        return;
    }

    // Validación sencilla de email
    if (!(email.includes("@") && email.includes(".") && email.indexOf("@") < email.lastIndexOf("."))) {
        alert("Por favor ingresa un correo electrónico válido.");
        return;
    }

    if (mensaje === "") {
        alert("Por favor ingresa un mensaje.");
        return;
    }

    alert("¡Formulario enviado correctamente "+nombre+"!");
    formulario.reset(); // Limpiar el formulario
});

function mostrarDescripcion(lenguaje) {
    const cuadro = document.getElementById("descripcionLenguaje");

    // Si el cuadro ya tiene el mismo texto se oculta
    if (cuadro.dataset.actual === lenguaje) {
        cuadro.classList.remove("activo");
        cuadro.dataset.actual = "";
        return;
    }

    let texto = "";

    switch (lenguaje) {
        case "csharp":
            texto = "<b>C#</b>: Usado para crear aplicaciones de escritorio, videojuegos con Unity, software empresarial y desarrollo con .NET.";
            break;

        case "javascript":
            texto = "<b>JavaScript</b>: Lenguaje principal del desarrollo web. Permite crear páginas interactivas, animaciones y aplicaciones dinámicas.";
            break;

        case "python":
            texto = "<b>Python</b>: Ideal para inteligencia artificial, análisis de datos, automatización, backend y aprendizaje automático.";
            break;

        case "sql":
            texto = "<b>SQL</b>: Lenguaje para crear, gestionar y consultar bases de datos. Fundamental para manejar información profesionalmente.";
            break;
    }

    // Actualizar contenido
    cuadro.innerHTML = texto;
    cuadro.dataset.actual = lenguaje;

    // Mostrar cuadro
    cuadro.classList.add("activo");
}