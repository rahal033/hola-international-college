import { motion } from "motion/react";

type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: keyof React.JSX.IntrinsicElements;
  by?: "word" | "char";
};

/**
 * Reveal text character-by-character (or word-by-word) on mount.
 * Premium typographic flourish - each glyph staggers in from below
 * with a tiny opacity + y transform.
 *
 * Respects prefers-reduced-motion automatically via motion/react.
 */
export default function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.03,
  as: Tag = "span",
  by = "char",
}: SplitTextProps) {
  // Split by word first, preserving spaces; then optionally split each word into chars
  const words = text.split(" ");

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {by === "char"
            ? word.split("").map((ch, ci) => (
                <motion.span
                  key={`${wi}-${ci}`}
                  initial={{ y: "0.6em", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: delay + (wi * 0.04 + ci * stagger),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
                  aria-hidden
                >
                  {ch}
                </motion.span>
              ))
            : (
                <motion.span
                  initial={{ y: "0.6em", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: delay + wi * stagger * 4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
                  aria-hidden
                >
                  {word}
                </motion.span>
              )}
          {wi < words.length - 1 && <span aria-hidden>&nbsp;</span>}
        </span>
      ))}
    </Tag>
  );
}
