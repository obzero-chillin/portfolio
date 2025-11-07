import React, { useState, useEffect, useRef } from 'react';

const FadeIn = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    // 1. Create the Intersection Observer
    const observer = new IntersectionObserver(entries => {
      // If the entry is intersecting (visible), set state to true
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add a delay before setting visible
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          // Stop observing once visible to prevent re-triggering
          observer.unobserve(domRef.current);
        }
      });
    });

    // 2. Start observing the element
    observer.observe(domRef.current);

    // 3. Cleanup function
    return () => observer.unobserve(domRef.current);
  }, [delay]); // Re-run effect only if delay changes

  return (
    <div
      ref={domRef}
      className={`
        motion-safe:transition-opacity motion-safe:duration-1000 motion-safe:ease-in-out 
        ${isVisible ? 'motion-safe:opacity-100 motion-safe:translate-y-0' : 'motion-safe:opacity-0 motion-safe:translate-y-10'}
      `}
    >
      {children}
    </div>
  );
};

export default FadeIn;