// animaciones.js
function rotateImage(element) {
    element.querySelector('.servicio img').classList.add('rotate');
    element.querySelector('.overlay').style.opacity = 1; /* Muestra el overlay */
}

function resetImage(element) {
    element.querySelector('.servicio img').classList.remove('rotate');
    element.querySelector('.overlay').style.opacity = 0; /* Oculta el overlay */
}

// Selecciona todos los elementos sobre los cuales deseas aplicar la animación
const elements = document.querySelectorAll('.img2, .habilidades div, .footer-content i');

// Agrega un event listener para el evento 'mouseover' a cada elemento
elements.forEach(element => {
    element.addEventListener('mouseover', () => {
        // Agrega la clase 'reduce-size' cuando el mouse pasa sobre el elemento
        element.classList.add('reduce-size');
    });

    // Remueve la clase 'reduce-size' cuando el mouse deja el elemento
    element.addEventListener('mouseout', () => {
        element.classList.remove('reduce-size');
    });
});


