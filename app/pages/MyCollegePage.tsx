import { useEffect, useState } from "react";
import ReviewModal from "~/components/modal/ReviewModal";

const MyCollegePage = () => {
  const [colleges, setColleges] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [userRating, setUserRating] = useState(1);

  useEffect(() => {
    // Fetch the data from the public folder
    fetch("/fake_datas/college_data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setColleges(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleShowDetails = (college) => {
    setSelectedCollege(college); // Set the selected college
    setShowDetails(true); // Open the modal
  };

  return (
    <div className="container mx-auto min-h-screen my-16">
      <div className="text-center space-y-2 pb-10">
        <p className="text-4xl font-bold pb-3">College List</p>
        <div className="relative mt-2 w-1/3 mx-auto">
          <div className="h-1 bg-gray-300"></div>
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 h-1 bg-[#f6520a]"
            style={{ width: "120px" }}
          ></div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
          <thead>
            <tr className="bg-[#f6520a] text-white">
              <th className="py-3 px-6 text-left font-bold border-b">
                College Name
              </th>
              <th className="py-3 px-6 text-left border-b font-bold">
                Date of Admission
              </th>
              <th className="py-3 px-6 text-left border-b font-bold">
                Research Count
              </th>
              <th className="py-3 px-6 text-end border-b font-bold">Rating</th>
            </tr>
          </thead>
          <tbody>
            {colleges.map((college) => (
              <tr
                key={college.id}
                className="hover:bg-gray-50 transition duration-300"
              >
                <td className="py-4 px-6 border-b">{college.name}</td>
                <td className="py-4 px-6 border-b">{college.admission_date}</td>
                <td className="py-4 px-6 border-b">{college.research_count}</td>
                <td className="py-4 px-6 border-b text-end">
                  <button
                    onClick={() => handleShowDetails(college)} // Trigger modal
                    className="py-2 rounded-xl px-6 text-white bg-[#f6520a]"
                  >
                    Feedback
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {showDetails && selectedCollege && (
          <ReviewModal onClose={() => setShowDetails(false)}>
            <div className="space-y-4">
              <h5 className="text-3xl font-bold text-center">
                {selectedCollege?.name}
              </h5>
              <div>
                <h6 className="font-semibold">Give a Review</h6>
                <textarea
                  name=""
                  id=""
                  className="border-2 w-full border-[#f6520a]"
                ></textarea>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      onClick={() => setUserRating(star)}
                      className="w-7 cursor-pointer"
                      viewBox="0 0 24 24"
                      fill="#94a3b8"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                        fill={star <= userRating ? "#f2b00a" : "#94a3b8"}
                      />
                    </svg>
                  ))}
                </div>
                <div className="flex justify-end items-end">
                  <button className="text-[#f6520a] hover:bg-[#f6520a] border-[#f6520a] border px-6 py-1 hover:text-white  ">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </ReviewModal>
        )}
      </div>
    </div>
  );
};

export default MyCollegePage;
