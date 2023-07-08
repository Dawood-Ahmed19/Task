const hamburgerMenu = document.querySelector(".toggle--nav");
const navMenu = document.querySelector(".menu");
const crossNav = document.querySelector(".fa-circle-xmark");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

crossNav.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});