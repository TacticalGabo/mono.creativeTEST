/* Mono Creative — GA4 consent-gated loader.
   Basic Consent Mode / pre-blocking: nothing is sent to Google until the
   visitor accepts via the cookie tooltip (localStorage 'mc-ck-ok'). The tag
   itself is only fetched after acceptance — no script, ping or cookie-less
   request reaches Google before that. See mono.tech/analytics-plan.md. */
(function () {
  'use strict';
  var ID = 'G-EHSDRCNGK4';
  var K = 'mc-ck-ok';

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  gtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  });

  var loaded = false;
  function load() {
    if (loaded) return;
    loaded = true;
    gtag('consent', 'update', { analytics_storage: 'granted' });
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
    document.head.appendChild(s);
    gtag('js', new Date());
    gtag('config', ID);
  }

  // Called by the cookie tooltip's Accept button on any page that has it.
  window.mcGrantAnalytics = load;

  // Returning visitor who already accepted: load immediately, no tooltip needed.
  try { if (localStorage.getItem(K)) load(); } catch (_) {}
})();
