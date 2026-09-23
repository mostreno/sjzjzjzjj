// ============================================================
// نظام الترجمة — بدون مكتبات خارجية
// ============================================================

(function() {
  'use strict';

  const STORAGE_KEY = 'lahza_locale';
  const DEFAULT_LOCALE = 'ar-EG';

  let translations = {};
  let currentLocale = DEFAULT_LOCALE;

  // قراءة اللغة المحفوظة
  function getSavedLocale() {
    try {
      return localStorage.getItem(STORAGE_KEY) || DEFAULT_LOCALE;
    } catch (e) {
      return DEFAULT_LOCALE;
    }
  }

  // حفظ اللغة
  function saveLocale(code) {
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch (e) {}
  }

  // جلب ملف الترجمة
  async function loadTranslations(code) {
    try {
      const res = await fetch('data/' + code + '.json');
      if (!res.ok) throw new Error('Failed');
      return await res.json();
    } catch (e) {
      console.warn('Failed to load', code, e);
      // fallback للإنجليزي
      if (code !== 'en') {
        const res = await fetch('data/en.json');
        return await res.json();
      }
      return {};
    }
  }

  // جلب قيمة من object بواسطة path (مثل: "nav.home")
  function getValue(path) {
    return path.split('.').reduce(function(obj, key) {
      return obj && obj[key] !== undefined ? obj[key] : null;
    }, translations);
  }

  // ترجمة كل العناصر
  function applyTranslations() {
    // data-i18n → textContent
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      var value = getValue(key);
      if (value !== null) {
        el.textContent = value;
      }
    });

    // data-i18n-html → innerHTML
    document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-html');
      var value = getValue(key);
      if (value !== null) {
        el.innerHTML = value;
      }
    });

    // data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var value = getValue(key);
      if (value !== null) {
        el.setAttribute('placeholder', value);
      }
    });

    // data-i18n-aria
    document.querySelectorAll('[data-i18n-aria]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-aria');
      var value = getValue(key);
      if (value !== null) {
        el.setAttribute('aria-label', value);
      }
    });
  }

  // تحديث اتجاه الصفحة
  function applyDirection(code) {
    var localeInfo = window.LAHZA_DATA.locales.find(function(l) {
      return l.code === code;
    });
    var dir = localeInfo ? localeInfo.dir : 'rtl';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', code);

    if (dir === 'ltr') {
      document.body.classList.add('ltr');
    } else {
      document.body.classList.remove('ltr');
    }
  }

  // تحديث حالة الـ switcher
  function updateSwitcher() {
    document.querySelectorAll('.lang-btn .lang-label').forEach(function(el) {
      var info = window.LAHZA_DATA.locales.find(function(l) {
        return l.code === currentLocale;
      });
      if (info) {
        el.textContent = info.flag + ' ' + info.label;
      }
    });

    document.querySelectorAll('.lang-dropdown button').forEach(function(btn) {
      var code = btn.getAttribute('data-locale');
      if (code === currentLocale) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // تغيير اللغة
  async function setLocale(code) {
    currentLocale = code;
    saveLocale(code);
    translations = await loadTranslations(code);
    applyDirection(code);
    applyTranslations();
    updateSwitcher();

    // إعادة رسم العناصر الديناميكية
    if (window.LAHZA_RENDER) {
      window.LAHZA_RENDER();
    }

    // حدث مخصص
    document.dispatchEvent(new CustomEvent('localeChanged', { detail: { locale: code } }));
  }

  // API عام
  window.LAHZA_I18N = {
    setLocale: setLocale,
    getLocale: function() { return currentLocale; },
    get: getValue,
    t: getValue
  };

  // init
  window.LAHZA_I18N.init = async function() {
    currentLocale = getSavedLocale();
    translations = await loadTranslations(currentLocale);
    applyDirection(currentLocale);
    applyTranslations();
    updateSwitcher();
  };

})();
