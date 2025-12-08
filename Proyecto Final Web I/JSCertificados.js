function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("menu-open");
}

const carrusel = document.getElementById('carruselCertificados');

// Duplicamos los elementos para crear efecto infinito
carrusel.innerHTML += carrusel.innerHTML;

let scrollAmount = 0;
const scrollStep = 2; // velocidad de desplazamiento
const scrollDelay = 10; // retraso en ms

function autoScroll() {
    scrollAmount += scrollStep;
    carrusel.scrollLeft = scrollAmount;

    // Cuando llega a la mitad (porque duplicamos los elementos), reiniciamos
    if (scrollAmount >= carrusel.scrollWidth / 2) {
        scrollAmount = 0;
    }
    requestAnimationFrame(autoScroll);
}

// Iniciamos el scroll automático
autoScroll();