document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Animación de entrada (Intersection Observer)
    const cards = document.querySelectorAll('.project-card');
    const observerOptions = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    cards.forEach(card => observer.observe(card));

    // 2. Filtrado Lógico de Portafolio
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Cambiar botón activo
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                projectCards.forEach(card => {
                    const category = card.getAttribute('data-category');

                    // Reset de animación para que se vea el efecto cada vez que filtras
                    card.style.animation = 'none';
                    card.offsetHeight; // trigger reflow
                    card.style.animation = null;

                    if (filterValue === 'all' || filterValue === category) {
                        card.classList.remove('hide');
                        card.classList.add('show');
                    } else {
                        card.classList.remove('show');
                        card.classList.add('hide');
                    }
                });
            });
        });
    }

    // 3. Efecto de Scroll en el Header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.padding = '0.8rem 5%';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.padding = '1.5rem 5%';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        }
    });
});