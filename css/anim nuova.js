document.addEventListener("DOMContentLoaded", function() {
    const animatedTexts = document.querySelectorAll('.fade-in-color');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); // Modifica la soglia se necessario

    animatedTexts.forEach(text => {
        text.style.animationPlayState = 'paused'; // Inizia l'animazione in pausa
        observer.observe(text);
    });
});
