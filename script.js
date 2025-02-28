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
                let stepTime;
                let increment;

                // Imposta velocità e step diversi per ogni counter
                if (counter.id === "counter2") {
                    stepTime = 0.2; // Litri - aggiorna molto più spesso
                    increment = target / 500000; // Ogni step aumenta di 
                } else if (counter.id === "counter3") {
                    stepTime = 200; // Dipendenti - più lento
                    increment = 1; // Sale di 1 alla volta
                } else {
                    stepTime = 250; // Stazioni - il più lento
                    increment = 1; // Sale di 1 alla volta
                }

                let updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        if (current > target) current = target;
                        counter.textContent = Math.floor(current);
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
