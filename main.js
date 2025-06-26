function handleSidebarToggle() {
  if (hamburgerMenu.classList.contains("active")) {
    hamburgerMenu.classList.remove("active");
    hamburgerMenu.classList.add("collapsed");
    setTimeout(() => {
      overlay.style.display = "none";
    }, 300);
  } else {
    overlay.style.display = "block";
    setTimeout(() => {
      hamburgerMenu.classList.remove("collapsed");
      hamburgerMenu.classList.add("active");
    }, 250);
  }
}

// Toggle sidebar cho desktop
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerMenuList = document.querySelector(".hamburger-menu__list");
const overlay = document.querySelector(".overlay");
const toggleSidebarBtn = document.querySelector(".header__hamburger-btn");
console.log("check ", hamburgerMenu.classList);

const hamburgerMenuClose = document.querySelector(".hamburger-menu__close");
toggleSidebarBtn.addEventListener("click", handleSidebarToggle);
hamburgerMenuClose.addEventListener("click", handleSidebarToggle);
// Toggle sidebar cho mobile/tablet

overlay.addEventListener("click", function (e) {
  if (hamburgerMenu.classList.contains("active")) {
    if (!hamburgerMenu.contains(e.target) && e.target !== toggleSidebarBtn) {
      hamburgerMenu.classList.remove("active");
      hamburgerMenu.classList.add("collapsed");
      setTimeout(() => {
        overlay.style.display = "none";
      }, 250);
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  hamburgerMenu.classList.add("collapsed");
});
