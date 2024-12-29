import React from "react";

const Discover = ({ discover }) => {
  const { image, name, size, guests, features, price } = discover;

  return (
    <div className="relative border rounded-lg shadow-md overflow-hidden">
      {/* Responsive Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover bg-gradient-to-b from-transparent to-black/50"
      />

      {/* Price Tag */}
      <p className="absolute top-2 right-2 bg-white text-[#CEAF83] text-xs sm:text-sm md:text-base font-semibold px-4 sm:px-6 py-1 sm:py-2 rounded">
        {price}
      </p>

      {/* Details Section */}
      <div className="absolute bottom-2 left-2 text-white bg-opacity-80 p-2 sm:p-4 rounded shadow-md">
        {/* Title */}
        <h3 className="text-sm sm:text-base md:text-lg xl:text-xl font-bold">
          {name}
        </h3>

        {/* Features */}
        <div className="flex gap-2 sm:gap-4 md:gap-6 flex-wrap">
          <p className="text-xs sm:text-sm md:text-base">{size} |</p>
          <p className="text-xs sm:text-sm md:text-base">{guests} |</p>
          <p className="text-xs sm:text-sm md:text-base">{features}</p>
        </div>
      </div>
    </div>
  );
};

export default Discover;
