import React from "react";

const DetailsModal = ({ children, onClose }: any) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-8 pb-10 rounded-lg max-w-lg w-full">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-black text-xl font-semibold bg-[#f6520a] rounded-full px-2"
          >
            &times;
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DetailsModal;
