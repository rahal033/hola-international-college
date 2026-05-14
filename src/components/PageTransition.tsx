import { type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

/**
 * Wraps page content so that on route change the outgoing page fades
 * out + slides up slightly while the incoming page fades in + rises.
 * Adds the "site is one continuous experience" feel rather than the
 * default jarring SPA route swap.
 *
 * Keys on the pathname so each route is a distinct presence-tree.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
