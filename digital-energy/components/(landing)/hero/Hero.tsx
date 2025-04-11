"use client";
import React, { useState, useEffect } from "react";
import { TfiEmail } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import "./styles.scss";

export default function Hero() {
  const slides = [
    {
      title: "Redefining the Future of Oil and Gas",
      description:
        "We stand as the ultimate link to excellence in the oil energy sector, driving intellectual progress for a sustainable future.",
      background: "/images/slide1-min.webp",
    },
    {
      title: "Empowering Energy Innovation",
      description:
        "Delivering cutting-edge solutions that redefine possibilities in the oil and gas industry.",
      background: "/images/slide2-min.webp",
    },
    {
      title: "Sustainability and Progress",
      description:
        "Innovating today for a cleaner, brighter, and more sustainable tomorrow.",
      background: "/images/slide3-min.webp",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setFade(false);
      }, 500); // Match the animation duration
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleSlideChange = (index: React.SetStateAction<number>) => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setFade(false);
    }, 500); // Match the animation duration
  };

  return (
    <>
      <section
        className={`hero ${fade ? "fade" : ""}`}
        style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${slides[currentSlide].background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
      >
        <div className="heroContent">
          <div className="heroText">
            <h1>{slides[currentSlide].title}</h1>
            <p>{slides[currentSlide].description}</p>
          </div>
          <div className="heroButton">
            {slides.map((_, index) => (
              <p
                key={index}
                onClick={() => handleSlideChange(index)}
                className={
                  currentSlide === index ? "active" : ""
                }
                style={{
                  cursor: "pointer",
                  border: currentSlide === index ? "1px solid white" : "none",
                  borderRadius: "50%",
                  padding: "5px 10px",
                }}
              >
                {`0${index + 1}`}
              </p>
            ))}
          </div>
        </div>
        <div className="heroBanner">
          <div className="left">
            <TfiEmail className="icon" />
            <div className="content">
              <h1>Email Address</h1>
              <p>info@digitalenergyng.com</p>
            </div>
          </div>
          <div className="right">
            <FiPhone className="icon" />
            <div className="content">
              <h1>Phone Number</h1>
              <p>+2342014536157</p>
            </div>
          </div>
        </div>
        <div className="redBox"></div>
        <div className="blueBox"></div>
      </section>
    </>
  );
}
