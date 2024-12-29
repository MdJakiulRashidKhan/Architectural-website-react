import React, { useState } from "react";
import { FaStar } from "react-icons/fa"; // Importing the star icon from react-icons

const Reviews = () => {
  const sliderData = [
    {
      title: `Rave Reviews from Our Satisfied Guests`,
    },
    {
      title: `Rave Reviews from Our  Satisfied Guests`,
    },
    {
      title: `Rave Reviews from Our  Satisfied Guests`,
    },
  ];

  const slides = [
    {
      id: 1,
      content:
        "Amazing design, easy to customize, and a design quality superlative account on its cloud platform for optimized performance.",
      name: "Arman",
      role: "Webflow Developer",
      rating: 5,
    },
    {
      id: 2,
      content:
        "Fantastic user experience! This platform helped us deliver outstanding results for our customers.",
      name: "Arman",
      role: "Product Manager",
      rating: 4,
    },
    {
      id: 3,
      content:
        "Highly recommended! The performance and design exceeded our expectations.",
      name: "Arman",
      role: "Designer",
      rating: 5,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-12">
      {/* Carousel Section */}
      <div className="w-full md:w-1/2 h-80">
        <div className="carousel py-24 bg-black text-white flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-center mb-6">
            {sliderData[currentSlide].title}
          </h2>
          <div className="flex items-center justify-center gap-6">
            <button
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black"
              aria-label="Previous Slide"
              onClick={prevSlide}
            >
              ❮
            </button>
            <div className="flex items-center gap-2">
              {sliderData.map((_, index) => (
                <span
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentSlide ? "bg-white" : "bg-gray-500"
                  }`}
                ></span>
              ))}
            </div>
            <button
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#b8a078] text-white"
              aria-label="Next Slide"
              onClick={nextSlide}
            >
              ❯
            </button>
          </div>
        </div>
      </div>

      {/* Review Card Section */}
      <div className="w-full md:w-1/2">
        <div className="max-w-lg p-4 bg-white shadow-lg rounded-lg space-y-4">
          <div className="flex justify-center items-center space-x-3">
            <img
              className="w-24 h-24 rounded-full object-cover"
              src="../../public/images/Rectangle 952.png"
              alt={`${slides[currentSlide].name}'s photo`}
            />
            <div className="text-center">
              <p className="font-semibold text-xl">
                {slides[currentSlide].name}
              </p>
              <p className="text-gray-500">{slides[currentSlide].role}</p>
            </div>
          </div>

          <p className="text-gray-700 text-center">
            {slides[currentSlide].content}
          </p>

          {/* Star Rating Section */}
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`text-xl ${
                  index < slides[currentSlide].rating
                    ? "text-yellow-500"
                    : "text-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
