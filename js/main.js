// HVAC Filter Guide - Main JS
document.addEventListener('DOMContentLoaded', function() {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      nav.classList.toggle('open');
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !expanded);
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
        // Close mobile nav if open
        if (nav) nav.classList.remove('open');
      }
    });
  });

  // Active nav highlighting
  const currentPath = window.location.pathname.replace(/\/$/, '').split('/').pop() || 'index';
  document.querySelectorAll('.main-nav a').forEach(function(link) {
    const href = link.getAttribute('href').replace('.html', '').replace(/\/$/, '').split('/').pop() || 'index';
    if (href === currentPath || (currentPath === 'index' && (href === '/' || href === 'index'))) {
      link.classList.add('active');
    }
  });
});
