// Función para alternar la visibilidad del menú hamburguesa
function toggleMenu() {
    const menu = document.getElementById("menu"); // obtenemos el elemento con id "menu"
    menu.classList.toggle("menu-open"); // agregamos o quitamos la clase "menu-open" para mostrar/ocultar
}

// Obtenemos el contenedor del carrusel de certificados
const carrusel = document.getElementById('carruselCertificados');

// Duplicamos el contenido interno del carrusel
// Esto crea un efecto de scroll infinito, porque al llegar al final hay contenido repetido
carrusel.innerHTML += carrusel.innerHTML;

let scrollAmount = 0;        // variable que almacena cuánto se ha desplazado el carrusel
const scrollStep = 2;        // cantidad de píxeles que se desplaza cada paso (velocidad)
const scrollDelay = 10;      // retraso entre desplazamientos en milisegundos (no se usa directamente aquí, porque usamos requestAnimationFrame)

// Función que realiza el desplazamiento automático
function autoScroll() {
    scrollAmount += scrollStep;      // incrementamos la posición de scroll
    carrusel.scrollLeft = scrollAmount; // desplazamos el carrusel horizontalmente

    // Comprobamos si llegamos a la mitad del contenido duplicado
    // Si es así, reiniciamos scrollAmount para crear efecto infinito
    if (scrollAmount >= carrusel.scrollWidth / 2) {
        scrollAmount = 0;
    }

    // Llamamos a la función de nuevo en el próximo frame del navegador
    // requestAnimationFrame optimiza la animación para que sea suave
    requestAnimationFrame(autoScroll);
}

// Iniciamos el desplazamiento automático
autoScroll();
