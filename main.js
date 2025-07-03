document.addEventListener("DOMContentLoaded", function () {
  // Hamburger menu state
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const overlay = document.querySelector(".overlay");
  const toggleSidebarBtn = document.querySelector(".header__hamburger-btn");
  const hamburgerMenuClose = document.querySelector(".hamburger-menu__close");
  function handleSidebarToggle() {
    if (hamburgerMenu.classList.contains("is-active")) {
      hamburgerMenu.classList.remove("is-active");
      setTimeout(() => {
        overlay.style.display = "none";
      }, 300);
    } else {
      overlay.style.display = "block";
      setTimeout(() => {
        hamburgerMenu.classList.add("is-active");
      }, 250);
    }
  }
  overlay.addEventListener("click", function (e) {
    if (hamburgerMenu.classList.contains("is-active")) {
      if (!hamburgerMenu.contains(e.target) && e.target !== toggleSidebarBtn) {
        hamburgerMenu.classList.remove("is-active");
        setTimeout(() => {
          overlay.style.display = "none";
        }, 250);
      }
    }
  });
  toggleSidebarBtn.addEventListener("click", handleSidebarToggle);
  hamburgerMenuClose.addEventListener("click", handleSidebarToggle);

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
      dot.classList.toggle(
        "hero__indicator-item--is-active",
        i === currentSlide
      );
    });
  }
  updateSlider();
  indicators.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      currentSlide = i;
      updateSlider(currentSlide);
    });
  });
  setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider(currentSlide);
  }, 3000);
});
