// --- MENÚ RESPONSIVE ---
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// --- VALIDACIÓN DEL FORMULARIO ---
function validarFormulario(event) {
    event.preventDefault();

    let nombre = document.querySelector("input[placeholder='Tu nombre']").value;
    let correo = document.querySelector("input[placeholder='Tu email']").value;
    let mensaje = document.querySelector("textarea").value;

    if (nombre === "" || correo === "" || mensaje === "") {
        alert("Por favor llena todos los campos.");
    } else {
        alert("Mensaje enviado correctamente.");
    }
}

// --- TEXTO DINÁMICO ---
let textos = ["desarrollo web", "la tecnología", "la programación", "la innovación"];
let indice = 0;

function cambiarTexto() {
    document.getElementById("texto-dinamico").innerText = textos[indice];
    indice = (indice + 1) % textos.length;
}

setInterval(cambiarTexto, 2000);

// --- RESALTAR PROYECTO ---
function seleccionarProyecto(card) {
    let cards = document.querySelectorAll(".project-card");
    cards.forEach(c => c.style.border = "1px solid #eee");

    card.style.border = "2px solid #6e00ff";
}
