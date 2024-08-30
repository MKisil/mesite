document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".info-card");
  const navDots = document.querySelectorAll(".nav__dot");
  let currentCard = 0;

  function showCard(index) {

    cards[currentCard].classList.add("fade-out");
    navDots[currentCard].classList.remove("active");

    setTimeout(() => {
      cards[currentCard].classList.add("visually-hidden");
      cards[index].classList.remove("visually-hidden");
      setTimeout(() => {
        cards[index].classList.remove("fade-out");
      }, 50)
      navDots[index].classList.add("active");
      currentCard = index;
    }, 400)
  }

  navDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      if (index !== currentCard) {
        showCard(index);
      }
    });
  });
});
