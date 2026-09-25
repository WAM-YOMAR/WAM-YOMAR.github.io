(() => {
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  // ---- Theme ----
  const stored = safeGet('theme');
  if (stored) root.setAttribute('data-theme', stored);

  themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    safeSet('theme', next);
  });

  function safeGet(key){ try { return localStorage.getItem(key); } catch(e){ return null; } }
  function safeSet(key, val){ try { localStorage.setItem(key, val); } catch(e){} }

  // ---- Mobile nav ----
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // ---- Footer year ----
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Reveal on scroll ----
  const revealTargets = document.querySelectorAll(
    '.timeline-item, .proj-card, .award-card, .pub-list li, .stat, .skill-block, .contact-card'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealTargets.forEach(el => io.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('in-view'));
  }
})();
