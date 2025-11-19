import { useEffect, useRef } from 'react';

function usePageVisibility() {
  const originalTitle = useRef(document.title);
  const message = "Check this before closing the internet!";

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = message;
      } else {
        document.title = originalTitle.current;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
}

export default usePageVisibility;