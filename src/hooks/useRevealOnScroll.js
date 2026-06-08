import { useRef } from 'react';
import { useInView } from 'framer-motion';

export function useRevealOnScroll(opciones = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: opciones.margin || '-50px',
    ...opciones,
  });
  return { ref, isInView };
}

export const revealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const revealFromLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const revealFromRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
