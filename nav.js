// Shared navigation injector
(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  function isActive(page) {
    return currentPage === page ? ' class="active"' : '';
  }

  // Photography sub-pages share "photography" active state
  const photoPages = ['fashion.html','engagement.html','kids-newborn.html'];
  const isPhotoActive = photoPages.includes(currentPage);

  const moonSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  const sunSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;

  // Apply saved dark mode immediately (body is available since nav.js is in body)
  const isDarkSaved = localStorage.getItem('darkMode') === '1';
  if (isDarkSaved) {
    document.body.classList.add('dark');
    document.documentElement.classList.remove('dark-init');
  }

  const initIcon = isDarkSaved ? sunSVG : moonSVG;
  const initLabel = isDarkSaved ? 'Light' : 'Dark';
  const initMobileLabel = isDarkSaved ? 'Light mode' : 'Dark mode';

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
  <button class="dark-toggle" id="darkToggle" aria-label="Toggle dark mode" onclick="window.__toggleDark()">
    <span id="darkToggleIcon">${initIcon}</span>
    <span id="darkToggleLabel">${initLabel}</span>
  </button>
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
  <button class="mobile-dark-toggle" id="mobileDarkToggle" aria-label="Toggle dark mode" onclick="window.__toggleDark(); document.querySelector('.mobile-menu').classList.remove('open')">
    <span id="mobileDarkToggleIcon">${initIcon}</span>
    <span id="mobileDarkToggleLabel">${initMobileLabel}</span>
  </button>
</div>
`);

  // Global toggle function
  window.__toggleDark = function() {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', isDark ? '1' : '0');
    const icon = document.getElementById('darkToggleIcon');
    const label = document.getElementById('darkToggleLabel');
    const mobileIcon = document.getElementById('mobileDarkToggleIcon');
    const mobileLabel = document.getElementById('mobileDarkToggleLabel');
    const svg = isDark ? sunSVG : moonSVG;
    if (icon) icon.innerHTML = svg;
    if (label) label.textContent = isDark ? 'Light' : 'Dark';
    if (mobileIcon) mobileIcon.innerHTML = svg;
    if (mobileLabel) mobileLabel.textContent = isDark ? 'Light mode' : 'Dark mode';
  };

})();
