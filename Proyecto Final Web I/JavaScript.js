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

    alert("¡Formulario enviado correctamente!");
    formulario.reset(); // Limpiar el formulario
});
