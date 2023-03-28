document.addEventListener("DOMContentLoaded", function () {
  function showFullscreenMenu() {
    fullscreenMenu.style.display = "block";
  }

  function closeMenu() {
    fullscreenMenu.style.display = "none";
  }

  const openbtn = document.querySelector(".hamburger"),
    fullscreenMenu = document.querySelector(".fullscreen-menu"),
    closebtn = document.querySelector(".fullscreen-menu__close");

  openbtn.addEventListener("click", showFullscreenMenu);

  closebtn.addEventListener("click", closeMenu);
});
