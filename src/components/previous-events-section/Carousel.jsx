import React, { useState, useEffect } from "react"; // Import your CSS file for styling
import "./styles.css";
import IMG1 from "../../assets/compressed/events/1.webp";
import IMG2 from "../../assets/compressed/events/2.webp";
import IMG3 from "../../assets/compressed/events/3.webp";
import IMG4 from "../../assets/compressed/events/4.webp";
import IMG5 from "../../assets/compressed/events/5.webp";
import IMG6 from "../../assets/compressed/events/6.webp";
const images = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6]; // Replace with your image paths

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
        >
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default Carousel;
