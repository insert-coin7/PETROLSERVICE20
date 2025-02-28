document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll("[id^='counter']");
    let observerOptions = {
        root: null, // Osserva l'elemento rispetto al viewport
        threshold: 0.5, // Parte quando il 50% dell'elemento è visibile
    };

    let counterObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                let counter = entry.target;
                let target = parseInt(counter.getAttribute("data-target"));
                let current = 0;
                let increment = target / 100; // Velocità dell'animazione

                let updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };

                updateCounter();
                observer.unobserve(counter); // Ferma l'osservazione dopo l'animazione
            }
        });
    }, observerOptions);

    counters.forEach((counter) => counterObserver.observe(counter));
});
