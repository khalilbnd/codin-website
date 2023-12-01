import React, { useRef, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedDiv = styled.div`
  opacity: 0;
  transform: translateY(20px);
  animation: ${fadeIn} 1s ease-out forwards;
`;

const ScrollAnimation = ({ children }) => {
  const targetRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        } else {
          setIsIntersecting(false);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Reset animation state when the element goes out of view
    if (!isIntersecting && targetRef.current) {
      targetRef.current.style.animation = 'none';
      setTimeout(() => {
        targetRef.current.style.animation = `${fadeIn} 1s ease-out forwards`;
      });
    }
  }, [isIntersecting]);

  return <AnimatedDiv ref={targetRef}>{children}</AnimatedDiv>;
};

export default ScrollAnimation;
