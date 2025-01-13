document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".count");
    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const increment = Math.ceil(target / 100);

        const updateCounter = () => {
            count += increment;
            if (count >= target) {
                counter.textContent = target.toLocaleString();
            } else {
                counter.textContent = count.toLocaleString();
                requestAnimationFrame(updateCounter);
            }
        };

        updateCounter();
    });
});
