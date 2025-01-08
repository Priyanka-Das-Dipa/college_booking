import { useEffect, useState } from "react";
import CollegeCard from "~/components/collegeCard/CollegeCard";

const AllCollegeList = () => {
  const [collegeData, setCollegeData] = useState([]);

  // Fetch data from JSON file
  useEffect(() => {
    // Fetch the data from the public folder
    fetch("/fake_datas/college_data.json")
      .then((response) => response.json())
      .then((data) => setCollegeData(data))
      .catch((error) =>
        console.error("Error fetching the college data:", error)
      );
  }, []);
  return (
    <>
      <div className="container mx-auto min-h-screen my-16">
        <div className="text-center space-y-2 pb-16">
          <p className="text-4xl font-bold pb-3">Top Rated College & Details</p>
          <div className="relative mt-2 w-1/3 mx-auto">
            <div className="h-1 bg-gray-300"></div>
            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 h-1 bg-[#f6520a]"
              style={{ width: "120px" }}
            ></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {collegeData.map((college) => (
            <CollegeCard key={college?.id} college={college} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllCollegeList;
