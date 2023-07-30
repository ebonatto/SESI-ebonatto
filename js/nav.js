const mobToggle = document.querySelector(".mob-menu-toggle");

mobToggle.addEventListener("click", () => {
  mobToggle.setAttribute(
    "aria-expanded",
    mobToggle.getAttribute("aria-expanded") == "true" ? false : true
  );
  console.log("click");
});
