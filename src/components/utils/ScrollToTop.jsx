import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const htmlElement = document.documentElement;
    const originalScrollBehavior = htmlElement.style.scrollBehavior;

    // Force instant scroll for page navigation
    htmlElement.style.scrollBehavior = 'auto';

    // Use a minimal timeout to help ensure the style change applies before scrolling
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      // Restore original scroll behavior after the instant scroll.
      // We use requestAnimationFrame to ensure this happens after the scroll has been processed.
      requestAnimationFrame(() => {
        htmlElement.style.scrollBehavior = originalScrollBehavior;
      });
    }, 0);

    return () => {
      clearTimeout(timer);
      // Ensure original style is restored if component unmounts or pathname changes quickly
      htmlElement.style.scrollBehavior = originalScrollBehavior;
    };
  }, [pathname]);

  return null;
}

export default ScrollToTop; 