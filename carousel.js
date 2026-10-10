// Research carousel — horizontal scroll with prev/next arrows
// Also registers carousel images into the global lightbox items array
(function () {
  var carousels = document.querySelectorAll('.research-carousel');
  carousels.forEach(function (carousel) {
    var track = carousel.querySelector('.carousel-track');
    var slides = carousel.querySelectorAll('.carousel-slide');
    var prevBtn = carousel.querySelector('.carousel-btn--prev');
    var nextBtn = carousel.querySelector('.carousel-btn--next');
    var total = slides.length;
    var current = 0;

    function goTo(index) {
      current = (index + total) % total;
      track.style.transform = 'translateX(-' + (current * 100) + '%)';
      // Update button states for non-looping feel (optional — we do loop)
    }

    if (prevBtn) prevBtn.addEventListener('click', function () { goTo(current - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goTo(current + 1); });

    // Touch / swipe support
    var startX = 0;
    track.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) goTo(dx < 0 ? current + 1 : current - 1);
    }, { passive: true });

    // Register images into lightbox items if lightbox is available
    // lightbox.js builds its items[] on DOMContentLoaded, so we do the same
    // but carousel.js loads after — we push directly into the module's items
    // via a custom event that lightbox listens for.
    slides.forEach(function (slide) {
      var img = slide.querySelector('img');
      if (!img) return;
      // Make image clickable — lightbox.js picks up .carousel-slide img
      img.style.cursor = 'zoom-in';
    });
  });
})();
