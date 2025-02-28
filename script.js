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

                // Imposta velocità molto più lente in base all'ID del counter
                let duration;
                if (counter.id === "counter2") {
                    duration = 1000; // Litri - va più veloce
                } else if (counter.id === "counter3") {
                    duration = 8000; // Dipendenti - molto più lento
                } else {
                    duration = 10000; // Stazioni - il più lento
                }

                let stepTime = duration / target; // Tempo per ogni incremento

                let updateCounter = () => {
                    if (current < target) {
                        current++;
                        counter.textContent = current;
                        setTimeout(updateCounter, stepTime);
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
