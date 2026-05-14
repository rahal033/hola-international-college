import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type Props = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

/**
 * Wrap any clickable element to give it a subtle magnetic pull
 * toward the cursor when it's nearby. Renders as a div so the
 * inner element (Link, anchor, button) handles its own semantics.
 * Disabled on touch and prefers-reduced-motion automatically.
 */
export default function MagneticButton({
  children,
  className,
  strength = 0.25,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { damping: 18, stiffness: 200, mass: 0.4 });
  const sy = useSpring(y, { damping: 18, stiffness: 200, mass: 0.4 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: sx, y: sy, display: "inline-block" }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  );
}
