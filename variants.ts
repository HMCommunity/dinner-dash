import { Variants } from 'framer-motion';

// File for Animations
export const fadeIn = (direction = 'up' || 'down'): Variants => {
  return {
    initial: {
      y: direction === 'up' ? 40 : -60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.8,
        ease: 'easeIn',
      },
    },
  };
};

export const fadeUp = (direction = 'up' || 'down') => {
  return {
    initial: {
      y: direction === 'up' ? 40 : -60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 3.0,
        ease: 'easeInOut',
      },
    },
  };
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.7,
    },
  },
};
