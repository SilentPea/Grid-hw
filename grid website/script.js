const menuBurger = document.querySelector(".menu-burger");
const hamburgerButton = document.querySelector(".hamburger");

hamburgerButton.addEventListener("click", () => {
  menuBurger.classList.toggle("hidden");
});
