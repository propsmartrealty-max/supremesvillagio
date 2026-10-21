"use client";

import { useEffect } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Only enable smooth scrolling on desktop devices with mouse pointer to avoid blocking mobile touch threads
    const isMobile = window.innerWidth < 1024 || window.matchMedia("(pointer: coarse)").matches;
    if (isMobile) {
      return;
    }

    let animationFrameId: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let lenisInstance: any;

    import("lenis").then(({ default: Lenis }) => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1,
      });
      lenisInstance = lenis;

      function raf(time: number) {
        lenis.raf(time);
        animationFrameId = requestAnimationFrame(raf);
      }

      animationFrameId = requestAnimationFrame(raf);
    });

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (lenisInstance) lenisInstance.destroy();
    };
  }, []);

  return <>{children}</>;
}
