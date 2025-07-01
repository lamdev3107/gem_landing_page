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

  // Slider Hero
  const slides = document.querySelectorAll(".slider-item");
  const indicators = document.querySelectorAll(".hero__indicator-item");

  function showSlide(index) {
    // Ẩn tất cả slides trước

    slides.forEach((slide, i) => {
      slide.classList.remove("active");
    });
    setTimeout(() => {
      slides.forEach((slide, i) => {
        if (i === index) slide.classList.toggle("active");
      });
    }, 300);

    // Cập nhật indicators
    indicators.forEach((dot, i) => {
      dot.classList.toggle("hero__indicator-item--active", i === index);
    });
    currentSlide = index;
  }

  indicators.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      showSlide(i);
    });
  });

  // Tự động chuyển slide mỗi 5 giây
  let currentSlide = 0;
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 5000);
});
