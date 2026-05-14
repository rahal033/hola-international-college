import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

type CounterProps = {
  to: number | string;
  from?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
};

/**
 * Animated number that ticks from 0 (or `from`) up to `to` once it
 * scrolls into view. If `to` is a non-numeric string (e.g. "AQF"),
 * displays as static text - so the same component works for the
 * mixed stats grid.
 */
export default function Counter({
  to,
  from = 0,
  duration = 1.6,
  suffix = "",
  prefix = "",
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState<string>(String(from));

  // Numeric path - animate
  const isNumeric = typeof to === "number";
  const motionValue = useMotionValue(from);
  const spring = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });

  useEffect(() => {
    if (!isNumeric) {
      setDisplay(String(to));
      return;
    }
    if (!inView) return;
    motionValue.set(to as number);
  }, [inView, to, isNumeric, motionValue]);

  useEffect(() => {
    if (!isNumeric) return;
    const unsub = spring.on("change", (v) => {
      setDisplay(Math.round(v).toLocaleString("en-AU"));
    });
    return unsub;
  }, [spring, isNumeric]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
