const header = document.querySelector("header");
let lastScrollY = window.scrollY;

const body = document.querySelector("body");
const nav = document.querySelector(".header-nav");
const navToggle = document.querySelector(".mob-menu-toggle");
const navButtons = document.querySelectorAll(".header-nav li");

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    header.classList.add("nav--hidden");
  } else {
    header.classList.remove("nav--hidden");
  }

  lastScrollY = window.scrollY;
});

navToggle.addEventListener("click", () => hideNav());

navButtons.forEach((button) => {
  button.addEventListener("click", () => hideNav());
});

function hideNav() {
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
