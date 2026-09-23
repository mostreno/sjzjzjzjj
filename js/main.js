// ============================================================
// الملف الرئيسي — أيقونات + رسم + تفاعلات
// ============================================================

(function() {
  'use strict';

  // ============ Icons ============
  var ICONS = {
    globe: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    shopping: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
    search: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    share: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',
    megaphone: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>',
    video: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>',
    grid: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>',
    store: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/></svg>',
    pen: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>',
    arrowUpRight: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>',
    external: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>',
    phone: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    message: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>',
    facebook: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
    instagram: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
    music: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="18" r="4"/><path d="M12 18V2l7 4"/></svg>',
    menu: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
    close: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
    arrowUp: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>',
    sparkles: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>',
    check: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    plus: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
    palette: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
    code: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    eye: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>',
    rocket: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
    gem: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/></svg>',
    trending: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',
    target: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    zap: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    heart: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
    users: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
  };

  window.LAHZA_ICONS = ICONS;

  // ============ Render Services ============
  window.LAHZA_RENDER_SERVICES = function(containerId, limit) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var list = window.LAHZA_DATA.services;
    if (limit) list = list.slice(0, limit);

    container.innerHTML = list.map(function(s) {
      var name = window.LAHZA_I18N.t('serviceNames.' + s.slug) || s.slug;
      var desc = window.LAHZA_I18N.t('serviceDescriptions.' + s.slug) || '';
      var icon = ICONS[s.icon] || ICONS.globe;
      return '<a href="' + s.page + '" class="service-card reveal">' +
        '<div class="service-icon">' + icon + '</div>' +
        '<h3>' + name + '</h3>' +
        '<p>' + desc + '</p>' +
      '</a>';
    }).join('');

    observeReveals();
  };

  // ============ Render Projects ============
  window.LAHZA_RENDER_PROJECTS = function(containerId, limit) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var list = window.LAHZA_DATA.projects;
    if (limit) list = list.slice(0, limit);

    container.innerHTML = list.map(function(p) {
      var name = window.LAHZA_I18N.t('projectNames.' + p.slug) || p.slug;
      var desc = window.LAHZA_I18N.t('projectDescriptions.' + p.slug) || '';
      var visit = window.LAHZA_I18N.t('portfolio.visitSite') || 'Visit';
      return '<a href="' + p.page + '" class="project-card reveal">' +
        '<div class="project-image"><img src="' + p.image + '" alt="' + name + '" loading="lazy"></div>' +
        '<div class="project-body">' +
          '<h3>' + name + '</h3>' +
          '<p>' + desc + '</p>' +
          '<div class="project-link">' + ICONS.external + ' ' + visit + '</div>' +
        '</div>' +
      '</a>';
    }).join('');

    observeReveals();
  };

  // ============ Stats Counter ============
  function animateStats() {
    document.querySelectorAll('.stat-num[data-count]').forEach(function(el) {
      var target = parseInt(el.getAttribute('data-count'), 10);
      var current = 0;
      var step = target / 40;

      function tick() {
        current += step;
        if (current >= target) {
          el.textContent = target;
        } else {
          el.textContent = Math.floor(current);
          requestAnimationFrame(tick);
        }
      }
      setTimeout(tick, 500);
    });
  }

  // ============ Reveal on scroll ============
  function observeReveals() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(function(el) {
        el.classList.add('visible');
      });
      return;
    }

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal:not(.visible), .reveal-left:not(.visible), .reveal-right:not(.visible), .reveal-scale:not(.visible)').forEach(function(el) {
      observer.observe(el);
    });
  }

  // ============ Navbar scroll ============
  function initNavbar() {
    var navbar = document.getElementById('navbar');
    if (!navbar) return;
    window.addEventListener('scroll', function() {
      if (window.scrollY > 20) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    }, { passive: true });
  }

  // ============ Mobile menu ============
  function initMobileMenu() {
    var toggle = document.getElementById('menuToggle');
    var menu = document.getElementById('mobileMenu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', function() {
      menu.classList.toggle('open');
      var isOpen = menu.classList.contains('open');
      toggle.innerHTML = isOpen ? ICONS.close : ICONS.menu;
    });
  }

  // ============ Language switcher ============
  function initLangSwitcher() {
    var switcher = document.querySelector('.lang-switch');
    if (!switcher) return;

    var btn = switcher.querySelector('.lang-btn');
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      switcher.classList.toggle('open');
    });

    document.addEventListener('click', function() {
      switcher.classList.remove('open');
    });

    switcher.querySelectorAll('.lang-dropdown button').forEach(function(b) {
      b.addEventListener('click', function(e) {
        e.preventDefault();
        var code = b.getAttribute('data-locale');
        window.LAHZA_I18N.setLocale(code);
        switcher.classList.remove('open');
      });
    });
  }

  // ============ Scroll to top ============
  function initScrollTop() {
    var btn = document.getElementById('scrollTop');
    if (!btn) return;

    window.addEventListener('scroll', function() {
      if (window.scrollY > 600) btn.classList.add('visible');
      else btn.classList.remove('visible');
    }, { passive: true });

    btn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ============ FAQ Accordion ============
  function initFAQ() {
    document.querySelectorAll('.faq-item').forEach(function(item) {
      var q = item.querySelector('.faq-q');
      if (!q) return;
      q.addEventListener('click', function() {
        var wasOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(function(i) {
          i.classList.remove('open');
        });
        if (!wasOpen) item.classList.add('open');
      });
    });
  }

  // ============ Render all ============
  window.LAHZA_RENDER = function() {
    window.LAHZA_RENDER_SERVICES('servicesGrid', 6);
    window.LAHZA_RENDER_SERVICES('servicesGridFull');
    window.LAHZA_RENDER_PROJECTS('portfolioGrid', 4);
    window.LAHZA_RENDER_PROJECTS('portfolioGridFull');
  };

  // ============ Inject icons in DOM ============
  function injectIcons() {
    document.querySelectorAll('[data-icon]').forEach(function(el) {
      var name = el.getAttribute('data-icon');
      if (ICONS[name]) el.innerHTML = ICONS[name];
    });
  }

  // ============ Init ============
  async function init() {
    injectIcons();

    if (window.LAHZA_I18N && window.LAHZA_I18N.init) {
      await window.LAHZA_I18N.init();
    }

    window.LAHZA_RENDER();
    initNavbar();
    initMobileMenu();
    initLangSwitcher();
    initScrollTop();
    initFAQ();
    animateStats();
    observeReveals();

    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
