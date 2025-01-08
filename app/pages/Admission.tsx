import { useState } from "react";
import img1 from "../../images/uni1.jpeg";
import img2 from "../../images/uni2.jpeg";
import img3 from "../../images/uni3.jpeg";
import img4 from "../../images/uni4.jpeg";
import AdmissionModal from "~/components/modal/AdmissionModal";

const AdmissionPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const uni_data = [
    {
      id: 1,
      name: "Greenfield College",
      address: "123 Greenfield Road, Springfield, IL 62704",
      image: img1,
    },
    {
      id: 2,
      name: "Blue Ridge University",
      address: "456 Blue Ridge Lane, Denver, CO 80203",
      image: img2,
    },
    {
      id: 3,
      name: "Sunrise Academy",
      address: "789 Sunrise Avenue, Orlando, FL 32801",
      image: img3,
    },
    {
      id: 4,
      name: "Silver Valley Institute",
      address: "321 Silver Valley Street, Seattle, WA 98101",
      image: img4,
    },
    {
      id: 5,
      name: "Oceanview College",
      address: "654 Oceanview Blvd, San Diego, CA 92101",
      image: img1,
    },
    {
      id: 6,
      name: "Hillcrest University",
      address: "987 Hillcrest Drive, Austin, TX 73301",
      image: img4,
    },
  ];
  return (
    <div className="container mx-auto min-h-screen">
      <div className="text-center space-y-2 pb-16">
        <p className="text-4xl font-bold pb-3">
          Top Ranked College for Admission
        </p>
        <div className="relative mt-2 w-1/3 mx-auto">
          <div className="h-1 bg-gray-300"></div>
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 h-1 bg-[#f6520a]"
            style={{ width: "120px" }}
          ></div>
        </div>
      </div>

      {/* Crads Div */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {uni_data.map((data, index) => (
          <div
            key={index}
            className="w-full max-w-[400px] space-y-3 rounded-xl bg-white p-4 shadow-lg dark:bg-[#18181B] border border-[#f6520a]"
          >
            <div className="flex h-48 w-full justify-center lg:h-[260px]">
              <img
                width={400}
                height={400}
                className="rounded-lg bg-black/40 object-cover"
                src={data.image}
              />
            </div>
            <div className="space-y-2 font-semibold">
              <h6
                onClick={() => {
                  setOpenModal(true);
                  setSelectedUniversity(data);
                }}
                className="text-sm text-center md:text-base lg:text-3xl hover:cursor-pointer"
              >
                {data.name}
              </h6>
              <p className="text-xs text-center">{data.address}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AdmissionModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        data={selectedUniversity}
      />
    </div>
  );
};

export default AdmissionPage;
