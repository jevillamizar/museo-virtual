import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, trackEvent } from '../analytics/ga4';

export function useAnalytics(nombrePagina) {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname, nombrePagina);
  }, [location.pathname, nombrePagina]);

  return { trackEvent };
}
