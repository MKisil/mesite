document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const speed = 50;

    const updateCounter = () => {
      const current = +counter.innerText;

      const increment = Math.ceil(target / speed);

      if (current < target) {
        counter.innerText = Math.min(current + increment, target);
        setTimeout(updateCounter, speed);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
});
