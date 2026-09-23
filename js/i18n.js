// ============================================================
// نظام الترجمة — بدون مكتبات خارجية
// ============================================================

(function() {
  'use strict';

  var STORAGE_KEY = 'lahza_locale';
  var DEFAULT_LOCALE = 'ar-EG';

  var translations = {};
  var currentLocale = DEFAULT_LOCALE;

  function getSavedLocale() {
    try {
      return localStorage.getItem(STORAGE_KEY) || DEFAULT_LOCALE;
    } catch (e) {
      return DEFAULT_LOCALE;
    }
  }

  function saveLocale(code) {
    try { localStorage.setItem(STORAGE_KEY, code); } catch (e) {}
  }

  async function loadTranslations(code) {
    try {
      var res = await fetch('data/' + code + '.json');
      if (!res.ok) throw new Error('Failed');
      return await res.json();
    } catch (e) {
      if (code !== 'en') {
        var res2 = await fetch('data/en.json');
        return await res2.json();
      }
      return {};
    }
  }

  function getValue(path) {
    return path.split('.').reduce(function(obj, key) {
      return obj && obj[key] !== undefined ? obj[key] : null;
    }, translations);
  }

  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var value = getValue(el.getAttribute('data-i18n'));
      if (value !== null) el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
      var value = getValue(el.getAttribute('data-i18n-html'));
      if (value !== null) el.innerHTML = value;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      var value = getValue(el.getAttribute('data-i18n-placeholder'));
      if (value !== null) el.setAttribute('placeholder', value);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function(el) {
      var value = getValue(el.getAttribute('data-i18n-aria'));
      if (value !== null) el.setAttribute('aria-label', value);
    });

    document.querySelectorAll('[data-i18n-title]').forEach(function(el) {
      var value = getValue(el.getAttribute('data-i18n-title'));
      if (value !== null) el.setAttribute('title', value);
    });
  }

  function applyDirection(code) {
    var info = window.LAHZA_DATA.locales.find(function(l) { return l.code === code; });
    var dir = info ? info.dir : 'rtl';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', code);
    if (dir === 'ltr') document.body.classList.add('ltr');
    else document.body.classList.remove('ltr');
  }

  function updateSwitcher() {
    document.querySelectorAll('.lang-btn .lang-label').forEach(function(el) {
      var info = window.LAHZA_DATA.locales.find(function(l) { return l.code === currentLocale; });
      if (info) el.textContent = info.flag + ' ' + info.label;
    });

    document.querySelectorAll('.lang-dropdown button').forEach(function(btn) {
      if (btn.getAttribute('data-locale') === currentLocale) btn.classList.add('active');
      else btn.classList.remove('active');
    });
  }

  async function setLocale(code) {
    currentLocale = code;
    saveLocale(code);
    translations = await loadTranslations(code);
    applyDirection(code);
    applyTranslations();
    updateSwitcher();

    if (window.LAHZA_RENDER) window.LAHZA_RENDER();
    document.dispatchEvent(new CustomEvent('localeChanged', { detail: { locale: code } }));
  }

  window.LAHZA_I18N = {
    setLocale: setLocale,
    getLocale: function() { return currentLocale; },
    get: getValue,
    t: getValue,
    init: async function() {
      currentLocale = getSavedLocale();
      translations = await loadTranslations(currentLocale);
      applyDirection(currentLocale);
      applyTranslations();
      updateSwitcher();
    }
  };
})();
