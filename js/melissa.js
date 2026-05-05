// Script interactivo para la imagen de perfil de Melissa
// Efecto: Convierte la imagen a blanco y negro al pasar el mouse

document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.querySelector('.profile-hero__image');
    const hint = document.querySelector('.profile-hero__hint');

    if (!profileImage) {
        console.warn('No se encontró la imagen de perfil');
        return;
    }

    // Agregar clase al pasar el mouse
    profileImage.addEventListener('mouseover', function() {
        profileImage.classList.add('grayscale-filter');
        if (hint) {
            hint.textContent = '✨ ¡Efecto blanco y negro activado!';
        }
    });

    // Remover clase al salir del mouse
    profileImage.addEventListener('mouseout', function() {
        profileImage.classList.remove('grayscale-filter');
        if (hint) {
            hint.textContent = '';
        }
    });
});
