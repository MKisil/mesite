document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const body = document.body;
  const themeSwitcher = document.querySelector(".theme-switcher");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
  }

  function toggleTheme() {
    body.classList.toggle("dark");
    const isDark = body.classList.contains("dark");

    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  themeSwitcher.addEventListener('click', toggleTheme)

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
