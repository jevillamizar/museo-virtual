export function initGA(measurementId) {
  if (!measurementId) return;
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.async = true;
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId);
}

export function trackEvent(categoria, accion, etiqueta) {
  if (!window.gtag) return;
  window.gtag('event', accion, {
    event_category: categoria,
    event_label: etiqueta,
  });
}

export function trackPageView(ruta, titulo) {
  if (!window.gtag) return;
  window.gtag('event', 'page_view', {
    page_path: ruta,
    page_title: titulo,
  });
}
