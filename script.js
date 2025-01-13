document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".count");
    const speed = 2000; // Velocità più alta per rallentare l'animazione

    counters.forEach(counter => {
        const updateCount = () => {
            const target = parseInt(counter.getAttribute("data-target")); // Assicura che sia un numero
            const count = parseInt(counter.innerText);

            if (isNaN(target)) {
                console.error(`Valore non valido per data-target: ${counter.getAttribute("data-target")}`);
                return; // Ferma l'animazione per questo contatore
            }

            // Incremento basato su un valore più lento
            const increment = Math.ceil(target / speed);

            if (count < target) {
                counter.innerText = count + increment;
                setTimeout(updateCount, 50); // Aumenta il tempo tra gli aggiornamenti per rallentare
            } else {
                counter.innerText = target; // Imposta il valore finale
            }
        };

        updateCount();
    });
});
