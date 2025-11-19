import { useEffect, useRef } from 'react';

function usePageVisibility() {
  const originalTitle = useRef(document.title);
  const message = "Check this!";
  const iconPath = "assets/surprised-emoji.svg"; // Path to the new favicon
  const originalIconHref = useRef(
    document.querySelector("link[rel='icon']").getAttribute("href")
  );

  useEffect(() => {
    const handleVisibilityChange = () => {
      const favicon = document.querySelector("link[rel='icon']");
      if (document.hidden) {
        // Change title
        document.title = message;
        // Change favicon
        if (favicon) {
          favicon.setAttribute("href", iconPath);
        }
      } else {
        // Restore original title
        document.title = originalTitle.current;
        // Restore original favicon
        if (favicon && originalIconHref.current) {
          favicon.setAttribute("href", originalIconHref.current);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [iconPath, originalTitle]);
}

export default usePageVisibility;