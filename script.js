document.addEventListener("DOMContentLoaded", function () {
    const counters = [
        { id: "counter1", target: 10 },       // Stazioni
        { id: "counter2", target: 30000000 }, // Litri
        { id: "counter3", target: 20 }        // Dipendenti
    ];
    
    const duration = 5000; // Tempo totale in ms (5 secondi)
    
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounters(); // Avvia il conteggio solo quando visibile
                observer.disconnect(); // Evita riattivazioni
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(document.getElementById("counter1"));

    function startCounters() {
        counters.forEach(counter => animateCounter(counter.id, counter.target, duration));
    }
    
    function animateCounter(id, target, duration) {
        let element = document.getElementById(id);
        let startTime = null;

        function updateCounter(timestamp) {
            if (!startTime) startTime = timestamp;
            let progress = Math.min((timestamp - startTime) / duration, 1);
            element.textContent = Math.floor(progress * target);
            if (progress < 1) requestAnimationFrame(updateCounter);
        }

        requestAnimationFrame(updateCounter);
    }
});
