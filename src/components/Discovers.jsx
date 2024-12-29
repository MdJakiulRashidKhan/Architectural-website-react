import React, { useEffect, useState } from "react";
import Discover from "./Discover";

const Discovers = () => {
  const [discovers, setDiscovers] = useState([]);

  useEffect(() => {
    fetch("/rooms.json") // Ensure rooms.json is accessible
      .then((res) => res.json())
      .then((data) => setDiscovers(data))
      .catch((error) => console.error("Error fetching rooms data:", error));
  }, []);

  return (
    <div className="p-4">
      <div className="mb-6 flex items-center">
        <h4 className="text-xl font-bold mb-2 w-1/2">
          Discover Homeya's Finest Properties For <br /> Your Dream Home
        </h4>
        <p className="text-sm text-gray-600 w-1/2">
          All three of Rooms Hotels locations are restorations that translate
          historic locations into places of contemporary comfort. Industrial
          architecture, salvaged building materials and the unique approach
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {discovers.slice(0, 2).map((discover, index) => (
          <div
            key={discover.image}
            className={`${
              index === 0
                ? "md:col-span-2 lg:col-span-2"
                : "md:col-span-1 lg:col-span-1"
            }`}
          >
            <Discover discover={discover} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
        {discovers.slice(2).map((discover) => (
          <Discover key={discover.image} discover={discover}></Discover>
        ))}
      </div>
    </div>
  );
};

export default Discovers;
