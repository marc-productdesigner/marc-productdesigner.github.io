// Shared navigation injector
(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  function isActive(page) {
    return currentPage === page ? ' class="active"' : '';
  }

  // Photography sub-pages share "photography" active state
  const photoPages = ['fashion.html','engagement.html','kids-newborn.html'];
  const isPhotoActive = photoPages.includes(currentPage);

  document.write(`
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
<nav>
  <a class="nav-logo" href="index.html"><img src="images/ml-logo.webp" alt="Marc Laurente" class="nav-logo-img" /></a>
  <ul class="nav-links">
    <li><a href="index.html"${isActive('index.html')}>Home</a></li>
    <li><a href="about.html"${isActive('about.html')}>About</a></li>
    <li><a href="resume.html"${isActive('resume.html')}>Resume</a></li>
    <li><a href="fashion.html"${isPhotoActive ? ' class="active"' : ''}>Photography</a></li>
    <li><a href="videography.html"${isActive('videography.html')}>Videography</a></li>
    <li><a href="logos.html"${isActive('logos.html')}>Logos</a></li>
  </ul>
  <button class="nav-toggle" aria-label="Open menu" onclick="document.querySelector('.mobile-menu').classList.add('open')">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-menu">
  <button class="mobile-close" onclick="document.querySelector('.mobile-menu').classList.remove('open')">&times;</button>
  <a href="index.html" onclick="document.querySelector('.mobile-menu').classList.remove('open')">Home</a>
  <a href="about.html" onclick="document.querySelector('.mobile-menu').classList.remove('open')">About</a>
  <a href="resume.html" onclick="document.querySelector('.mobile-menu').classList.remove('open')">Resume</a>
  <a href="fashion.html" onclick="document.querySelector('.mobile-menu').classList.remove('open')">Photography</a>
  <a href="videography.html" onclick="document.querySelector('.mobile-menu').classList.remove('open')">Videography</a>
  <a href="logos.html" onclick="document.querySelector('.mobile-menu').classList.remove('open')">Logos</a>
</div>
`);
})();
