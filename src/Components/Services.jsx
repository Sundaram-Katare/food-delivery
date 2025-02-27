import { useState } from "react";

function Services() {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 px-5 md:px-20 mt-8">
        <div className="border-gray-500 rounded-lg overflow-hidden">
          <img
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/print_crystal_WEB_0.jpg"
            alt=""
            className="w-full h-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-full mx-auto object-cover"
          />
        </div>

        <div className="border-gray-500 rounded-lg overflow-hidden">
          <img
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg"
            alt=""
            className="w-full h-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-full mx-auto object-cover"
          />
        </div>

        <div className="border-gray-500 rounded-lg overflow-hidden">
          <img
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg"
            alt=""
            className="w-full h-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-full mx-auto object-cover"
          />
        </div>

        <div className="border-gray-500 rounded-lg overflow-hidden">
          <img
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg"
            alt=""
            className="w-full h-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-full mx-auto object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default Services;
