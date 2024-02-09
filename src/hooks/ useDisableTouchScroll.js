import { useEffect } from "react";

const useDisableTouchScroll = (enableTouchScroll) => {
  useEffect(() => {
    const preventTouchScroll = (e) => {
      if (!enableTouchScroll) {
        e.preventDefault();
      }
    };

    document.addEventListener("touchmove", preventTouchScroll, {
      passive: false,
    });

    return () => {
      document.removeEventListener("touchmove", preventTouchScroll);
    };
  }, [enableTouchScroll]);
};

export default useDisableTouchScroll;
