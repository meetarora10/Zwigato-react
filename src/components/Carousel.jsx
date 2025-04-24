import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Carousel = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 0,
      imgSrc: "https://plus.unsplash.com/premium_photo-1669261879286-f4091ee59bf8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRlbGljaW91cyUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
      alt: "Delicious Food"
    },
    {
      id: 1,
      imgSrc: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Pizza"
    },
    {
      id: 2,
      imgSrc: "https://images.unsplash.com/photo-1695093457919-7d03b0467a18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRlbGljaW91cyUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
      alt: "Gourmet Food"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Carousel Slides */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={slide.imgSrc} 
            alt={slide.alt}
            className="object-cover w-full h-full brightness-50"
          />
        </div>
      ))}

      {/* Carousel Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10">
        <div className="text-center mb-32">
          <h2 className="text-white text-3xl md:text-5xl font-bold font-serif">
            Welcome to{" "}
            <span className="inline-block">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  strings: ["Zwigato"],
                }}
              />
            </span>
          </h2>
          <p className="text-white text-lg md:text-xl mt-2">Your delicious meal awaits you!</p>
        </div>

        <div className="absolute bottom-16">
          <button 
            className="px-6 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors" 
            onClick={() => navigate('/order')}
          >
            Order Now
          </button>
        </div>
      </div>

      {/* Carousel Controls */}
      <button 
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-20 rounded-full p-2 text-white hover:bg-opacity-30 focus:outline-none"
        onClick={goToPrevSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="sr-only">Previous</span>
      </button>
      
      <button 
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-20 rounded-full p-2 text-white hover:bg-opacity-30 focus:outline-none"
        onClick={goToNextSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <span className="sr-only">Next</span>
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;