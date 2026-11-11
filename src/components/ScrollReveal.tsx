import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  as?: React.ElementType;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  threshold = 0.08,
  rootMargin = '0px 0px -40px 0px',
  as: Component = 'div',
}) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold,
    rootMargin,
    delay,
    once: true,
  });

  return (
    <Component
      ref={ref}
      style={{
        transitionDuration: '700ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionProperty: 'opacity, transform',
        willChange: isVisible ? 'auto' : 'opacity, transform',
      }}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      } ${className}`}
    >
      {children}
    </Component>
  );
};
