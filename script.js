document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll("[id^='counter']");
    let observerOptions = {
        root: null,
        threshold: 0.5, // Parte quando il 50% dell'elemento è visibile
    };

    let counterObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                let counter = entry.target;
                let target = parseInt(counter.getAttribute("data-target"));
                let current = 0;

                // Imposta velocità diverse in base all'ID del counter
                let increment;
                if (counter.id === "counter2") {
                    increment = target / 100; // Litri (più veloce)
                } else {
                    increment = target / 200; // Stazioni e Dipendenti (più lento)
                }

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
                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach((counter) => counterObserver.observe(counter));
});
