function handleSidebarToggle() {
  if (hamburgerMenu.classList.contains("active")) {
    hamburgerMenu.classList.remove("active");
    hamburgerMenu.classList.add("collapsed");
  } else {
    mainSidebar.classList.add("active");
    mainSidebar.classList.remove("collapsed");
  }
}

// Toggle sidebar cho desktop
const hamburgerMenu = document.querySelector(".main-sidebar");
const hamburgerMenuContent = document.querySelector(".main-sidebar__content");
const toggleSidebarBtn = document.querySelector(".header__hamburger-btn");
const closeSidebarBtn = document.querySelector(".close-sidebar-btn");
toggleSidebarBtn.addEventListener("click", handleSidebarToggle);
// closeSidebarBtn.addEventListener("click", handleSidebarToggle);
// Toggle sidebar cho mobile/tablet

document.addEventListener("click", function (e) {
  if (hamburgerMenu.classList.contains("active")) {
    if (!hamburgerMenu.contains(e.target) && e.target !== toggleSidebarBtn) {
      hamburgerMenu.classList.remove("active");
      hamburgerMenu.classList.add("collapsed");
      hamburgerMenuContent.classList.add("hidden");
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  fetchData(1);
  hamburgerMenu.classList.add("collapsed");
});
