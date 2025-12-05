function moverCarrusel(distancia) {
    const carrusel = document.getElementById('carruselCertificados');
    carrusel.scrollBy({ left: distancia, behavior: 'smooth' });
}