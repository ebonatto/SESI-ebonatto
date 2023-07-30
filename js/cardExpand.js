const cards = document.querySelectorAll(".menu4-card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const expanded = card.getAttribute("aria-expanded");

    if (expanded == "true") {
      card.setAttribute("aria-expanded", "false");
      card.querySelector("p").setAttribute("data-visible", "false");
    } else {
      card.setAttribute("aria-expanded", "true");
      card.querySelector("p").setAttribute("data-visible", "true");
    }
  });
});
