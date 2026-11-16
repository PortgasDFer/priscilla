import { useEffect, useRef, useState } from 'react';

export default function useImageReveal() {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        root: null,
        rootMargin: '100px 0px',
        threshold: 0.05
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return { elementRef, isVisible };
}