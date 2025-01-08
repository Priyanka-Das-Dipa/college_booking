import React, { useEffect, useState } from "react";
import img1 from "../../../images/banner1.jpg";
import img2 from "../../../images/banner2.avif";
import img3 from "../../../images/banner3.avif";

const Banner = () => {
  const banners = [
    {
      image: img1,
      text: "Upgrade your skills in online Academy! ",
      subText:
        "Our online academy offers a wide range of courses designed to help you stay ahead. Enroll now to unlock your potential!",
    },
    {
      image: img2,
      text: "Discover a new way of Education!",
      subText:
        "Experience interactive learning with personalized content, expert instructors, and a vibrant community of learners.",
    },
    {
      image: img3,
      text: "Expand your career opportunities! ",
      subText:
        "With our certified programs, you can boost your resume and stand out in the competitive job market.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);
  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={banner.image}
            alt={`Banner ${index + 1}`}
            className="w-full h-full object-cover "
          />
          {/* Text Overlay */}
          <div className=" absolute inset-0 flex items-center bg-black/50">
            <div className="container mx-auto text-left ml-8 space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-white opacity-0 animate-fadeDown">
                {banner.text}
              </h2>
              <p className="text-white text-2xl opacity-0 animate-fadeDown delay-200">
                {banner.subText}
              </p>
              <div className="flex space-x-4 mt-4 opacity-0 animate-fadeUp delay-400">
                <button className="px-8 py-3 bg-[#f6520a] text-white rounded-full hover:bg-[#f6520a] transition duration-300">
                  Learn More
                </button>
                <button className="px-8 py-3 rounded-full border-2 border-[#f6520a] text-white  hover:bg-[#f6520a] transition duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
