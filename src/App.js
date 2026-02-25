import './App.css';
import React, { useState } from 'react';

function App() {

  const slideData = [
    "Welcome to the Slideshow",
    "This is the Second Slide",
    "This is the Third Slide",
    "Thank you for watching"
  ];

  const [slides, setSlides] = useState(0);

  const handlePrevious = () => {
    if (slides > 0) {
      setSlides(slides - 1);
    }
  }

  const handleNext = () => {
    if (slides < slideData.length - 1) {
      setSlides(slides + 1);
    }
  }

  const handleRestart = () => {
    setSlides(0);
  }

  return (
    <div>
      <h1>Slide Show App</h1>

      <div>
        <h2>{slideData[slides]}</h2>
      </div>

      <div>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
        <button onClick={handleRestart}>Restart</button>
      </div>

    </div>
  );
}

export default App;