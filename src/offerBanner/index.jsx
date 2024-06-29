import React, { useState, useEffect } from 'react';
import "./style.css"
const Carousel = ({ images, interval  }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, interval, images.length]);

  return (
    <div className="carousel">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
    </div>
  );
};

const App = () => {
  const images = [
    'https://img.freepik.com/premium-vector/happy-onam-sale-banner-poster-design_1302-12852.jpg?w=826',
    'https://img.freepik.com/free-vector/yellow-banner-diwali-festival-sale_1017-34306.jpg?t=st=1717036357~exp=1717039957~hmac=2ac7c01df57b5dc247ad7d693c0f1909e61abd895ad4ac8a4871b928ae325933&w=826',
    'https://img.freepik.com/premium-vector/super-sale-banner-with-podium-template-design-emoji-icon_181623-571.jpg?w=826',
  ];

  return (
    <div >
      <Carousel images={images} interval={4000} />
    </div>
  );
};

export default App;
