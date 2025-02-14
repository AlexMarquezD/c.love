// Añadir fuente de Google Fonts
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

// Efecto de entrada suave
document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    if (main) {
        main.style.opacity = '0';
        main.style.transition = 'opacity 1.5s ease-in-out';
        
        setTimeout(() => {
            main.style.opacity = '1';
        }, 100);
    }
});

// Efecto parallax suave en la imagen (solo para index.html)
window.addEventListener('scroll', () => {
    const image = document.querySelector('.animate-float');
    if (image) {
        const scrolled = window.pageYOffset;
        image.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});