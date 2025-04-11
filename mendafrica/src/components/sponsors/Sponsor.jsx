"use client"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import './styles.scss'

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000, // This controls the speed of the smooth scroll
    slidesToShow: 5, // Show multiple images at once
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear", // This ensures smooth, continuous scrolling
    autoplaySpeed: 0, // Not necessary, but you can keep it as 0 for no pauses
    pauseOnHover: false, // Prevents stopping when hovering
    arrows: false // Remove arrows for a cleaner look
  };

  const images = [
    '/digital 1.png', 
    '/cashwyre.png', 
    '/vibeazy color 2.png', 
    '/afro 1.png', 
    '/vibeazy color 2.png',
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className='sliderImage'>
            <Image width={150} height={150} src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
