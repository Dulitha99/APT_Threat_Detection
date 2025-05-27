import { useEffect, useRef } from 'react';

interface ScrollAnimationOptions extends IntersectionObserverInit {
  animationClass: string; // e.g., 'animate-fadeIn', 'animate-slideInUp'
  initialClass?: string; // Class to apply before element is visible e.g. 'opacity-0'
  triggerOnce?: boolean; // Whether to unobserve after the first intersection
}

const useScrollAnimation = (options: ScrollAnimationOptions) => {
  const {
    animationClass,
    initialClass = '', // Sensible default if elements are styled hidden by default
    threshold = 0.1, // Default threshold
    root = null,
    rootMargin = '0px',
    triggerOnce = true, // Default to trigger animation only once
  } = options;

  const elementRef = useRef<HTMLElement | null>(null);
  // No need for isVisible state in the hook if the hook adds the class directly

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    // Apply initial class if provided
    if (initialClass) {
      node.classList.add(...initialClass.split(' ').filter(Boolean));
    }
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.remove(...initialClass.split(' ').filter(Boolean)); // Remove initial state class
          node.classList.add(...animationClass.split(' ').filter(Boolean)); // Add animation class

          if (triggerOnce) {
            observer.unobserve(node);
          }
        }
        // Optional: else if (triggerOnce === false) { node.classList.remove(animationClass); if (initialClass) node.classList.add(initialClass); }
        // This else block would re-apply initial styles if element scrolls out of view and triggerOnce is false.
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    observer.observe(node);

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [animationClass, initialClass, threshold, root, rootMargin, triggerOnce]); // Ref is stable, no need to include in deps

  // Return the ref for the component to assign to its element
  // Type assertion for convenience, actual element type will be set by component
  return elementRef as React.RefObject<any>; 
};

export default useScrollAnimation;
