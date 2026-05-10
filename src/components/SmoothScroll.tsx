import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Mounts Lenis smooth-scroll once at the app root and ties it to
 * requestAnimationFrame. Respects prefers-reduced-motion: if the user
 * opts out of animation, we skip Lenis entirely and let the browser
 * scroll natively.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo out
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
