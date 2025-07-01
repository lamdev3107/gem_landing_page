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
  const slider = document.querySelector(".slider-wrapper");
  const slides = document.querySelectorAll(".slider-item");
  const indicators = document.querySelectorAll(".hero__indicator-item");
  let currentSlide = 0;
  let totalSlides = slides.length;

  function updateSlider(currentSlide) {
    let width = slides[0].clientWidth;
    if (currentSlide >= totalSlides) {
      currentSlide = 0; // Reset to first slide if out of bounds
      slider.style.transform = `translateX(0px)`;
      return;
    }
    slider.style.transform = `translateX(${currentSlide * -1 * width}px)`;
    indicators.forEach((dot, i) => {
      dot.classList.toggle("hero__indicator-item--active", i === currentSlide);
    });
  }

  // Khởi tạo slider

  updateSlider();

  indicators.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      currentSlide = i;
      updateSlider(currentSlide);
    });
  });

  // Tự động chuyển slide mỗi 5s
  setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider(currentSlide);
  }, 3000);
  console.log("check index", currentSlide);
});
