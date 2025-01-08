import { useState } from "react";
import DetailsModal from "../modal/DetailsModal";

const CollegeCard = ({ college }: any) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    const stars = [];

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className="text-yellow-500 text-2xl">
          ★
        </span>
      );
    }

    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300 text-2xl">
          ☆
        </span>
      );
    }

    return stars;
  };

  return (
    <div className="flex w-full max-w-[800px] space-x-4 bg-white p-4 shadow-lg rounded-xl dark:bg-[#18181B] border border-[#f6520a]">
      {/* Left side: Image */}
      <div className="flex-1 w-1/3">
        <img
          width={400}
          height={350}
          className="rounded-lg object-cover w-[550px] h-[250px]"
          src={college?.image}
          alt={college?.name}
        />
      </div>

      {/* Right side: Information */}
      <div className="flex-1 space-y-3">
        <h6 className="text-xl font-semibold text-center md:text-2xl">
          {college.name}
        </h6>
        <p className="text-sm text-center">{college.admission_date}</p>
        <div className="text-center">
          <span className="text-xs">Rating: </span>
          {renderStars(college.rating)}
        </div>
        <p className="text-xs text-center">
          Research Projects: {college.research_count}
        </p>
        <div className="flex justify-center items-end">
          <button
            className="mt-3 px-3 py-2 text-white bg-[#f6520a] rounded-md "
            onClick={toggleDetails}
          >
            {showDetails ? "Hide Details" : "View Details"}
          </button>
        </div>
      </div>
      {/* Modal */}
      {showDetails && (
        <DetailsModal onClose={() => setShowDetails(false)}>
          <div className="space-y-4">
            <h5 className="text-3xl font-bold text-center">
              {college.name} Details
            </h5>
            <div>
              <h6 className="font-semibold ">Events:</h6>
              <ul className="list-disc ml-5">
                {college.details.events.map((event: string, index: number) => (
                  <li key={index} className="text-sm">
                    {event}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h6 className="font-semibold">Sports Facilities:</h6>
              <ul className="list-disc ml-5">
                {college.details.sports_facilities.map(
                  (facility: string, index: number) => (
                    <li key={index} className="text-sm">
                      {facility}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </DetailsModal>
      )}
    </div>
  );
};

export default CollegeCard;
