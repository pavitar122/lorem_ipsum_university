class Slider {
  constructor() {
    this.slides = document.querySelectorAll("[data-slide]");
    this.indicators = document.querySelectorAll("[data-slide-indicator]");
    this.currentIndex = 0;
    this.interval = null;
    this.init();
  }

  init() {
    // Start auto-slide
    this.startAutoSlide();

    // Add click events to indicators
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => this.goToSlide(index));
    });
  }

  startAutoSlide() {
    this.interval = setInterval(() => this.nextSlide(), 5000);
  }

  resetAutoSlide() {
    clearInterval(this.interval);
    this.startAutoSlide();
  }

  updateActiveSlide(index) {
    if (index < 0 || index >= this.slides.length) return; // Ensure index is valid

    // Update slides
    this.slides.forEach((slide) => slide.classList.remove("opacity-0"));
    this.slides.forEach((slide) => slide.classList.add("opacity-0"));
    this.slides[index].classList.remove("opacity-0");

    // Update indicators
    this.indicators.forEach((indicator) =>
      indicator.classList.remove("bg-white", "!bg-white")
    );
    this.indicators[index].classList.add("bg-white");
  }

  nextSlide() {
    this.currentIndex =
      this.currentIndex < this.slides.length - 1 ? this.currentIndex + 1 : 0;
    this.updateActiveSlide(this.currentIndex);
  }

  prevSlide() {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.slides.length - 1;
    this.updateActiveSlide(this.currentIndex);
  }

  goToSlide(index) {
    this.currentIndex = index;
    this.updateActiveSlide(this.currentIndex);
    this.resetAutoSlide();
  }
}

export default Slider;
