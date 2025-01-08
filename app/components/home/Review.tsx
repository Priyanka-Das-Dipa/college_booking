import React, { useEffect, useState } from "react";
import user_image from "../../../images/user_image.jpeg";
const Review = () => {
  const array = [
    {
      collegeName: "Stanford University",
      reviewDescription:
        "Stanford University offers a world-class education, cutting-edge research opportunities, and an inspiring campus environment. The faculty and resources available are unparalleled, making it an exceptional choice for higher education.",
      reviewDate: "2025-01-01",
      userName: "Alice Johnson",
      userImage: user_image,
    },
    {
      collegeName: "Harvard University",
      reviewDescription:
        "Harvard University stands out with its rich history, academic excellence, and diverse student body. The rigorous coursework and access to top-notch facilities make it a prestigious place to learn and grow.",
      reviewDate: "2025-01-02",
      userName: "Michael Smith",
      userImage: user_image,
    },
    {
      collegeName: "Massachusetts Institute of Technology (MIT)",
      reviewDescription:
        "MIT is the epitome of innovation and creativity. The campus fosters a collaborative environment where students tackle real-world problems through cutting-edge research and technological advancements.",
      reviewDate: "2025-01-03",
      userName: "Sophia Brown",
      userImage: user_image,
    },
    {
      collegeName: "University of California, Berkeley",
      reviewDescription:
        "UC Berkeley is renowned for its vibrant campus life, academic rigor, and dedication to public service. The diverse community and focus on innovation make it a top choice for students worldwide.",
      reviewDate: "2025-01-04",
      userName: "James Wilson",
      userImage: user_image,
    },
    {
      collegeName: "University of Oxford",
      reviewDescription:
        "Oxford University offers an unparalleled academic experience with its centuries-old traditions and modern research facilities. The tutorial system is particularly valuable for personalized learning.",
      reviewDate: "2025-01-05",
      userName: "Emily Davis",
      userImage: user_image,
    },
    {
      collegeName: "University of Cambridge",
      reviewDescription:
        "Cambridge University is a perfect blend of tradition and cutting-edge research. The picturesque campus and world-class faculty provide an inspiring environment for academic and personal growth.",
      reviewDate: "2025-01-06",
      userName: "Robert Taylor",
      userImage: user_image,
    },
    {
      collegeName: "California Institute of Technology (Caltech)",
      reviewDescription:
        "Caltech is a hub for scientific discovery and innovation. The small class sizes and exceptional faculty ensure that every student gets the guidance they need to excel in their chosen field.",
      reviewDate: "2025-01-07",
      userName: "Isabella Martinez",
      userImage: user_image,
    },
    {
      collegeName: "University of Chicago",
      reviewDescription:
        "The University of Chicago is known for its emphasis on critical thinking and intellectual exploration. The vibrant community and interdisciplinary approach make it a standout institution.",
      reviewDate: "2025-01-08",
      userName: "Liam Johnson",
      userImage: user_image,
    },
  ];

  const [currentSlider, setCurrentSlider] = useState(0);
  // The slider images array
  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? array.length - 2 : currentSlider - 1
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === array.length - 2 ? 0 : currentSlider + 1
    );
  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlider]);

  const isSmallScreen = window.innerWidth <= 768;

  return (
    <div className="max-w-full min-w-[350px]  mx-auto h-[400px] flex flex-row items-center overflow-hidden gap-5 lg:gap-10 px-8 md:px-16 lg:px-24">
      <div className="relative overflow-hidden">
        <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
          {/* arrow left */}
          <button
            onClick={prevSlider}
            className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="w-4 h-4 md:w-6 md:h-6 icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
            >
              {" "}
              <g strokeWidth="0"></g>{" "}
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>{" "}
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="black"
                  d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                ></path>
              </g>
            </svg>
          </button>
          {/* arrow right */}
          <button
            onClick={nextSlider}
            className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="w-4 h-4 md:w-6 md:h-6 icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              transform="rotate(180)"
            >
              {" "}
              <g strokeWidth="0"></g>{" "}
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>{" "}
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill="black"
                  d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                ></path>
              </g>
            </svg>
          </button>
        </div>
        {/* slider container */}
        <div
          className="ease-linear duration-300 flex"
          style={{
            transform: `translateX(-${
              currentSlider * (isSmallScreen ? 100 : 50)
            }%)`,
          }}
        >
          {/* sliders */}
          {array.map((each, idx) => (
            <div key={idx} className="p-4 min-w-full md:min-w-[50%]">
              <div className="h-full p-8 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-slate-800 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <h1 className="text-xl font-bold">{each?.collegeName}</h1>
                <p className="leading-relaxed mb-6 text-gray-500">
                  {each?.reviewDescription}
                </p>
                <a className="inline-flex items-center">
                  <img
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    src={each?.userImage}
                    alt="carousel navigate ui"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      {each.userName}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {each?.reviewDate}
                    </span>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
