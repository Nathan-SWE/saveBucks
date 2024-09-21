const menuMobileBtn = document.querySelector(".menu-btn");
const menuMobile = document.querySelector(".menu-mobile");

menuMobileBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("hidden");
});
