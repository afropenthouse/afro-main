import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useScrollToTop = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      // You can use window.scroll with options for more control
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth', // Add smooth scrolling
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Cleanup the event listener when the component is unmounted or on route change
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);
};

export default useScrollToTop;