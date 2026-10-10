// Shared lightbox with left/right arrow navigation
(function () {
  var items = [];   // array of {src, alt}
  var currentIndex = 0;

  // Build overlay
  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';

  var img = document.createElement('img');
  img.alt = '';

  var closeBtn = document.createElement('button');
  closeBtn.className = 'lightbox-close';
  closeBtn.innerHTML = '&times;';
  closeBtn.setAttribute('aria-label', 'Close');

  var prevBtn = document.createElement('button');
  prevBtn.className = 'lightbox-arrow lightbox-arrow--prev';
  prevBtn.innerHTML = '&#8592;';
  prevBtn.setAttribute('aria-label', 'Previous');

  var nextBtn = document.createElement('button');
  nextBtn.className = 'lightbox-arrow lightbox-arrow--next';
  nextBtn.innerHTML = '&#8594;';
  nextBtn.setAttribute('aria-label', 'Next');

  overlay.appendChild(img);
  overlay.appendChild(closeBtn);
  overlay.appendChild(prevBtn);
  overlay.appendChild(nextBtn);
  document.body.appendChild(overlay);

  function show(index) {
    currentIndex = (index + items.length) % items.length;
    img.src = items[currentIndex].src;
    img.alt = items[currentIndex].alt;
    // Hide arrows if only one item
    var showArrows = items.length > 1;
    prevBtn.style.display = showArrows ? '' : 'none';
    nextBtn.style.display = showArrows ? '' : 'none';
  }

  function open(index) {
    show(index);
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(function () { img.src = ''; }, 320);
  }

  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', function (e) { e.stopPropagation(); show(currentIndex - 1); });
  nextBtn.addEventListener('click', function (e) { e.stopPropagation(); show(currentIndex + 1); });

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay || e.target === img) close();
  });

  document.addEventListener('keydown', function (e) {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft')  show(currentIndex - 1);
    if (e.key === 'ArrowRight') show(currentIndex + 1);
  });

  // Collect all images on this page into the items array
  // Photo grid images
  document.querySelectorAll('.photo-grid img').forEach(function (el) {
    var idx = items.length;
    items.push({ src: el.src, alt: el.alt });
    el.style.cursor = 'zoom-in';
    el.addEventListener('click', function () { open(idx); });
  });

  // Logo cards
  document.querySelectorAll('.logo-card').forEach(function (el) {
    var cardImg = el.querySelector('img');
    if (!cardImg) return;
    var idx = items.length;
    items.push({ src: cardImg.src, alt: cardImg.alt });
    el.style.cursor = 'zoom-in';
    el.addEventListener('click', function () { open(idx); });
  });

  // Research carousel images (.carousel-slide img)
  document.querySelectorAll('.carousel-slide img').forEach(function (el) {
    var idx = items.length;
    items.push({ src: el.src, alt: el.alt });
    el.style.cursor = 'zoom-in';
    el.addEventListener('click', function () { open(idx); });
  });

  // Case study body images (solution screens, before redesign, etc.)
  document.querySelectorAll('.case-content > img').forEach(function (el) {
    var idx = items.length;
    items.push({ src: el.src, alt: el.alt });
    el.style.cursor = 'zoom-in';
    el.addEventListener('click', function () { open(idx); });
  });
})();
