document.addEventListener("DOMContentLoaded", function () {
    const counters = [
        { id: "counter1", target: 10 },       // Stazioni
        { id: "counter2", target: 30000000 }, // Litri
        { id: "counter3", target: 20 }        // Dipendenti
    ];

    const duration = 5000; // Tempo totale (5 secondi)
    const frameRate = 60;  // 60 FPS per animazione fluida
    const totalFrames = (duration / 1000) * frameRate; 

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounters(); // Avvia il conteggio solo quando visibile
                observer.disconnect(); // Evita di far ripartire i contatori più volte
            }
        });
    }, { threshold: 0.5 }); // Attiva quando almeno il 50% del contatore è visibile

    // Osserva uno dei contatori (può essere qualunque, scegliamo il primo)
    observer.observe(document.getElementById("counter1"));

    function startCounters() {
        counters.forEach(counter => {
            let element = document.getElementById(counter.id);
            let current = 0;
            let increment = counter.target / totalFrames; // Incremento per ogni frame

            function updateCounter() {
                current += increment;
                if (current >= counter.target) {
                    element.innerText = counter.target.toLocaleString();
                } else {
                    element.innerText = Math.floor(current).toLocaleString();
                    requestAnimationFrame(updateCounter);
                }
            }

            updateCounter();
        });
    }
});
