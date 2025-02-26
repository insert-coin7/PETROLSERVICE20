document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll(".info-box span");
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            let count = +counter.innerText;
            const speed = target / 200;
            if (count < target) {
                counter.innerText = Math.ceil(count + speed);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
});
