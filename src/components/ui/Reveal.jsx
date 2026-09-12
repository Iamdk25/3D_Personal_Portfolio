import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll reveal used by every section. Collapses to a plain fade when the
 * visitor prefers reduced motion.
 */
const Reveal = ({ children, delay = 0, y = 26, className = "" }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
