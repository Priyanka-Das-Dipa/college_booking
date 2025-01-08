

const AdmissionModal = ({ isOpen, onClose, data } : any) => {
  if (!isOpen || !data) return null;
  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-700 dark:text-gray-300"
          >
            ✖
          </button>

          {/* Modal Content */}
          <h2 className="text-xl font-bold mb-4">{data.name}</h2>
          <p className="text-gray-600 mb-4 dark:text-gray-400">
            {data.address}
          </p>

          {/* Input Fields */}
          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Candidate Name</label>
              <input
                className="bg-transparent flex h-10 w-full rounded-md border px-3"
                placeholder="Enter your name"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Subject</label>
              <input
                className="bg-transparent flex h-10 w-full rounded-md border px-3"
                placeholder="Enter your subject"
                type="text"
                name="subject"
                id="subject"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Candidate Email</label>
              <input
                className="bg-transparent flex h-10 w-full rounded-md border px-3"
                placeholder="Enter your email address"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Phone Number</label>
              <input
                className="bg-transparent flex h-10 w-full rounded-md border px-3"
                placeholder="Enter your phone number"
                type="text"
                name="phone"
                id="phone"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Address</label>
              <input
                className="bg-transparent flex h-10 w-full rounded-md border px-3"
                placeholder="Enter your Address"
                type="text"
                name="address"
                id="address"
              />
            </div>
            <div className="flex gap-5">
              <div className="space-y-2">
                <label className="text-sm font-medium">Date of Birth</label>
                <input
                  className="bg-transparent flex h-10 w-full rounded-md border px-3"
                  placeholder="DOB"
                  name="dob"
                  type="date"
                  id="dob"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Image</label>
                <input
                  className="bg-transparent flex h-10 w-full rounded-md border px-3"
                  placeholder="image"
                  name="image"
                  type="file"
                  id="image"
                />
              </div>
            </div>
            <button
              type="button"
              className="w-full px-4 py-2 hover:text-[#f6520a] border-2 hover:bg-white hover:border-[#f6520a] text-white rounded-lg bg-[#f6520a]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdmissionModal;
