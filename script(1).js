document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".count");
    const updateCounter = (element, target) => {
        let count = 0;
        const increment = Math.ceil(target / 100);
        const interval = setInterval(() => {
            count += increment;
            if (count >= target) {
                count = target;
                clearInterval(interval);
            }
            element.textContent = count.toLocaleString();
        }, 50);
    };

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute("data-target"));
        updateCounter(counter, target);
    });
});
