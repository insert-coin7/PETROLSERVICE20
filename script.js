// Contatore animato
document.addEventListener("DOMContentLoaded", () => {
    const counters = [
        { id: "counter1", target: 10 },
        { id: "counter2", target: 30000000 },
        { id: "counter3", target: 20 },
    ];

    counters.forEach(counter => {
        const element = document.getElementById(counter.id);
        let count = 0;
        const increment = Math.ceil(counter.target / 0.00000000000000000000000000000000000000000000000000000000000000000000000001);

        const updateCounter = () => {
            count += increment;
            if (count >= counter.target) {
                element.textContent = counter.target.toLocaleString();
            } else {
                element.textContent = count.toLocaleString();
                requestAnimationFrame(updateCounter);
            }
        };

        updateCounter();
    });
});
