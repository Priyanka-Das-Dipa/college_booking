import { FaCalendarAlt, FaEye } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import re1 from "../../../images/research-1.jpg";
import re2 from "../../../images/research-2.jpg";
import re3 from "../../../images/research-3.jpg";
import { useEffect, useState } from "react";
const Research = () => {
  const [researchData, setResearchData] = useState([]);
  const images = [re1, re2, re3];
  useEffect(() => {
    fetch("/fake_datas/research_data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setResearchData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mx-auto">
      {/* title section */}
      <div className="text-center space-y-2 pb-16">
        <h1 className="text-lg text-[#f6520a] font-semibold">Research</h1>
        <p className="text-4xl font-bold pb-3">Recent Research by Graduates</p>
        <div className="relative mt-2 w-1/3 mx-auto">
          <div className="h-1 bg-gray-300"></div>
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 h-1 bg-[#f6520a]"
            style={{ width: "120px" }}
          ></div>
        </div>
      </div>
      {/* REsearch cards */}
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="space-y-2">
          <div className="relative overflow-hidden">
            <img
              src={re1}
              alt="image_loading"
              className="rounded-md transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
          </div>
          <div>
            <div className="flex gap-16 space-y-2">
              <p className="flex gap-2 justify-center items-center">
                <FaCalendarAlt className="text-xl text-[#f6520a]" />
                May 12, 2021
              </p>
              <p className="flex gap-2 justify-center items-center">
                <FaEye className="text-xl text-[#f6520a]" />
                56
              </p>
              <p className="flex gap-2 justify-center items-center">
                <FiMessageCircle className="text-xl text-[#f6520a]" />
                56
              </p>
            </div>
            <h1 className="text-3xl font-bold hover:underline hover:decoration-[#f6520a]">
              The Role of the Elementary Teacher in Education
            </h1>
          </div>
        </div>

        <div className="flex-1 space-y-9">
          {researchData.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-5">
              <div className="relative overflow-hidden">
                <img
                  src={images[index % images.length]}
                  alt={item?.researchName}
                  className="md:w-[350px] w-full h-[200px] md:h-[160px] rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110"
                />
              </div>
              <div className="space-y-1">
                <div className="flex gap-10">
                  <span className="flex gap-2 justify-center items-center">
                    <FaCalendarAlt className="text-xl text-[#f6520a]" />
                    {item?.date}
                  </span>
                  <span className="flex gap-2 justify-center items-center">
                    <FaEye className="text-xl text-[#f6520a]" />
                    {item?.views}
                  </span>
                  <span className="flex gap-2 justify-center items-center">
                    <FiMessageCircle className="text-xl text-[#f6520a]" />
                    {item?.comments}
                  </span>
                </div>
                <div>
                  <h1 className="text-3xl font-bold hover:underline hover:decoration-[#f6520a]">
                    {item?.researchName}
                  </h1>
                  <p className="font-medium text-base pt-1">
                    {item?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;
