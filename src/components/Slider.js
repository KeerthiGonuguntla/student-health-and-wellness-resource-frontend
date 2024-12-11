import React, { useState } from 'react';
import './Slider.css'; // CSS for the slider

const slides = [
  {
    title: 'Mental Health Support',
    description: 'Access counseling services, stress management techniques, and mindfulness practices to stay mentally healthy.',
  },
  {
    title: 'Fitness Programs',
    description: 'Get personalized workout plans and fitness tips to stay physically active and healthy.',
  },
  {
    title: 'Nutrition Advice',
    description: 'Receive personalized nutrition tips and meal plans to maintain a healthy diet and lifestyle.',
  }
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider">
      <div className="slider-content">
        <h2>{slides[currentSlide].title}</h2>
        <p>{slides[currentSlide].description}</p>
      </div>
      <div className="slider-controls">
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
}

export default Slider;
