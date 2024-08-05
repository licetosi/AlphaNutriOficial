document.addEventListener('DOMContentLoaded', function() {
    const texto3 = document.querySelector('.texto3');
    const rodas = document.querySelector('.rodas');

    const options = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.5 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, options);

    observer.observe(texto3);
    observer.observe(rodas);
});
