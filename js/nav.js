const header = document.querySelector("header");
let lastScrollY = window.scrollY;

const body = document.querySelector("body");
const nav = document.querySelector(".header-nav");
const navToggle = document.querySelector(".mob-menu-toggle");
const navButtons = document.querySelectorAll(".header-nav li");

// Mostra/Esconde o menu quando o botão do menu é clicado
navToggle.addEventListener("click", () => toggleNav());

// Esconde o menu quando o algum link ancora do menu é clicado
navButtons.forEach((button) => {
  button.addEventListener("click", () => toggleNav());
});

function toggleNav() {
  let visibility = nav.getAttribute("data-visible");

  if (visibility == "true") {
    nav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
    body.classList.remove("fixed");
  } else {
    nav.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");
    body.classList.add("fixed");
  }
}
