import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/**
 * Custom cursor: a soft tan-tinted ring that follows the cursor and
 * expands when hovering over interactive elements. Only renders on
 * pointer-fine devices (skips touch). Skips entirely on
 * prefers-reduced-motion.
 *
 * Native cursor stays visible behind it as a fallback - we don't
 * hide it, we add to it. Premium signal without an accessibility
 * regression.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 25, stiffness: 400, mass: 0.4 });
  const sy = useSpring(y, { damping: 25, stiffness: 400, mass: 0.4 });

  useEffect(() => {
    const mqPointer = window.matchMedia("(pointer: fine)");
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mqPointer.matches || mqMotion.matches) return;
    setEnabled(true);

    function move(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
    }

    function over(e: MouseEvent) {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      // Treat any anchor, button, label, or [role=button] as interactive
      const inter = t.closest("a, button, label, [role='button'], input, select, textarea");
      setHovering(!!inter);
    }

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
      style={{
        x: sx,
        y: sy,
      }}
    >
      <motion.div
        className="rounded-full bg-tan-300/70"
        animate={{
          width: hovering ? 56 : 14,
          height: hovering ? 56 : 14,
          x: hovering ? -28 : -7,
          y: hovering ? -28 : -7,
          opacity: hovering ? 0.55 : 0.85,
        }}
        transition={{ type: "spring", damping: 18, stiffness: 280 }}
      />
    </motion.div>
  );
}
