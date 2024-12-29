import React from "react";
import top from "../../public/images/Ellipse 2061.png";
import bottom from "../../public/images/Ellipse 2062.png";
import bannerimg from "../../public/images/Frame 4887.png";

const Banner = () => {
  return (
    <div className="relative">
      <div className="hero min-h-screen">
        <div className="hero-content flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between">
          <div className="relative">
            <img
              src={bannerimg}
              className="w-full h-[900px] rounded-lg shadow-2xl"
              alt="Main Visual"
            />
            <img
              className="absolute -top-12 -left-12 rounded-full hidden lg:block"
              src={top}
              alt="Decorative Circle"
            />
            <img
              className="absolute top-72 -right-16 rounded-full hidden lg:block"
              src={bottom}
              alt="Decorative Circle"
            />
          </div>

          <div className="text-center lg:text-left max-w-xl">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-snug">
              Find the top <br /> Hotels nearby.
            </h1>
            <p className="py-6 text-gray-700 text-sm md:text-base">
              Looking for a comfortable and convenient place to call home? Our
              house rental offers spacious living areas, modern amenities, and a
              prime location. Featuring multiple bedrooms, updated kitchens, and
              cozy living spaces, it's perfect for families or professionals.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start py-3 gap-4 text-gray-600">
              <p className="font-semibold">Vila</p>
              <p className="font-semibold">Family House</p>
              <p className="font-semibold">Hotel</p>
              <p className="font-semibold">Room</p>
            </div>
            <div className="flex flex-wrap items-center space-y-4 lg:space-y-0 lg:space-x-4 py-3">
              <a className="btn btn-outline rounded-3xl bg-[#CEAF83] text-white font-semibold">
                Reservation
              </a>
              <div className="flex items-center space-x-3">
                <img
                  className="rounded-full w-12 md:w-16 relative  inline-block"
                  src={top}
                  alt="Story Thumbnail"
                />
                <svg
                  className="absolute  transform translate-x-2  translate-y-1"
                  width="24.000000"
                  height="24.000000"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs>
                    <clipPath id="clip329_228">
                      <rect
                        id="Frame"
                        rx="0.000000"
                        width="23.000000"
                        height="23.000000"
                        transform="translate(0.500000 0.500000)"
                        fill="white"
                        fillOpacity="0"
                      />
                    </clipPath>
                  </defs>
                  <rect
                    id="Frame"
                    rx="0.000000"
                    width="23.000000"
                    height="23.000000"
                    transform="translate(0.500000 0.500000)"
                    fill="#FFFFFF"
                    fillOpacity="0"
                  />
                  <g clipPath="url(#clip329_228)">
                    <path
                      id="Vector"
                      d="M4.5 5.65C4.5 4.22 6.02 3.32 7.27 4.01L18.81 10.35C20.11 11.06 20.11 12.93 18.81 13.64L7.28 19.99C6.03 20.67 4.5 19.77 4.5 18.34L4.5 5.65Z"
                      fill="#FFFFFF"
                      fillOpacity="1.000000"
                      fillRule="evenodd"
                    />
                  </g>
                </svg>

                <p className="font-semibold">Watch Our Story</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="static md:block md:space-y-4 md:space-x-6 lg:absolute bottom-12 left-6 lg:bottom-16 lg:left-36">
        <h6 className="text-lg font-bold">Check Availability</h6>
        <div className="flex flex-wrap items-center gap-4 md:gap-8 lg:gap-16 px-4 py-4 bg-white rounded-full shadow-md">
          <div>
            <h6 className="text-sm md:text-lg font-bold">Check In</h6>
            <p className="text-gray-500 text-xs md:text-sm">Add dates</p>
          </div>
          <div>
            <h6 className="text-sm md:text-lg font-bold">Check Out</h6>
            <p className="text-gray-500 text-xs md:text-sm">Add dates</p>
          </div>
          <div>
            <h6 className="text-sm md:text-lg font-bold">Adults</h6>
            <p className="text-gray-500 text-xs md:text-sm">Add Adults</p>
          </div>
          <div>
            <h6 className="text-sm md:text-lg font-bold">Children</h6>
            <p className="text-gray-500 text-xs md:text-sm">Add Children</p>
          </div>
          <div>
            <h6 className="text-sm md:text-lg font-bold">Rooms</h6>
            <p className="text-gray-500 text-xs md:text-sm">Add Rooms</p>
          </div>
          <div className="bg-[#CEAF83] rounded-full w-14 h-14 flex justify-center items-center">
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.43 5.15C13.21 5.15 12.01 5.39 10.88 5.86C9.75 6.32 8.73 7.01 7.87 7.87C7.01 8.73 6.32 9.76 5.86 10.88C5.39 12.01 5.15 13.21 5.15 14.43C5.15 15.65 5.39 16.86 5.86 17.98C6.32 19.11 7.01 20.13 7.87 21C8.73 21.86 9.75 22.54 10.88 23.01C12.01 23.47 13.21 23.71 14.43 23.71C16.89 23.71 19.25 22.74 21 21C22.74 19.26 23.71 16.89 23.71 14.43C23.71 11.97 22.74 9.61 21 7.87C19.25 6.13 16.89 5.15 14.43 5.15ZM3.09 14.43C3.09 12.61 3.53 10.82 4.37 9.2C5.21 7.58 6.43 6.19 7.92 5.15C9.41 4.1 11.13 3.43 12.94 3.19C14.74 2.95 16.58 3.15 18.29 3.77C20.01 4.39 21.54 5.41 22.78 6.75C24.01 8.09 24.9 9.71 25.38 11.47C25.86 13.23 25.9 15.07 25.52 16.85C25.13 18.63 24.32 20.29 23.15 21.69L29.6 28.14C29.7 28.24 29.78 28.35 29.84 28.48C29.89 28.6 29.92 28.74 29.93 28.88C29.93 29.02 29.9 29.15 29.85 29.28C29.8 29.41 29.72 29.53 29.62 29.63C29.53 29.72 29.41 29.8 29.28 29.85C29.15 29.9 29.02 29.93 28.88 29.93C28.74 29.92 28.6 29.89 28.48 29.84C28.35 29.78 28.24 29.7 28.14 29.6L21.69 23.15C20.04 24.53 18.02 25.41 15.88 25.68C13.74 25.96 11.57 25.62 9.62 24.71C7.67 23.79 6.02 22.34 4.86 20.52C3.7 18.7 3.09 16.59 3.09 14.43Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
