import { useEffect, useRef, useState } from 'react';

const useScrollAnimation = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const node = ref.current;

    const handleIntersection = (entries) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        setInView(true);
      } else {
        setInView(false);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []); // Pass an empty dependency array to run the effect only once

  return [ref, inView];
};

export default useScrollAnimation;