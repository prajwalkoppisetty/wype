"use client";

import React, { useState, useRef, forwardRef, useEffect, useCallback } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Homepage from './Homepage';
import Secondslide from './Secondslide';
import './styles.css';

const Slide = forwardRef((props, ref) => (
  <div ref={ref} className="slide">
    {props.children}
  </div>
));
Slide.displayName = 'Slide';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const nodeRef = useRef(null);
  const slides = [<Homepage key="homepage" />, <Secondslide key="secondslide" />];

  const updateWindowDimensions = useCallback(() => {
    setIsMobile(window.innerWidth < 900);
  }, []);

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);
    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, [updateWindowDimensions]);

  if (isMobile) {
    return <Homepage />; // Render Homepage on smaller screens
  }

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider-container relative">
      <TransitionGroup>
        <CSSTransition
          key={currentIndex}
          timeout={300}
          classNames="slide"
          nodeRef={nodeRef}
        >
          <Slide ref={nodeRef}>{slides[currentIndex]}</Slide>
        </CSSTransition>
      </TransitionGroup>
      <button className="prev-button absolute top-1/2 left-4" onClick={goToPreviousSlide}>
        <FaArrowLeft size={30} />
      </button>
      <button className="next-button absolute top-1/2 right-4" onClick={goToNextSlide}>
        <FaArrowRight size={30} />
      </button>
    </div>
  );
};

export default Slider;
