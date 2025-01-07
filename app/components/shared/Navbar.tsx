import { useEffect, useRef, useState, type FormEvent } from "react";
import logo from "../../../images/logo.png";
import { NavLink } from "react-router";
const Navbar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef(0);

  useEffect(() => {
    const closeDropDown = (e: FormEvent) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };

    document.addEventListener("mousedown", closeDropDown);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);
  return (
    <nav className="flex items-center justify-between bg-white px-4 py-2 text-black mb-24">
      <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
        <img src={logo} alt="" />
      </div>
      <ul className="hidden items-center justify-between gap-10 md:flex">
        <li className="group flex  cursor-pointer flex-col">
          <NavLink to="/">Home</NavLink>

          <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#f6520a] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="group flex  cursor-pointer flex-col">
          <NavLink to="/college">Colleges</NavLink>
          <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#f6520a] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="group flex  cursor-pointer flex-col">
          <NavLink to="/admission">Admission</NavLink>
          <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#f6520a] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="group flex  cursor-pointer flex-col">
          <NavLink to="/myCollege"> My College</NavLink>
          <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#f6520a] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="group flex  cursor-pointer flex-col">
          <NavLink to="/login">Login</NavLink>
          <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#f6520a] transition-all duration-300 group-hover:w-full"></span>
        </li>
      </ul>
      <div
        ref={dropDownMenuRef}
        onClick={() => setDropDownState(!dropDownState)}
        className="relative flex transition-transform md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="cursor-pointer"
        >
          {" "}
          <line x1="4" x2="20" y1="12" y2="12" />{" "}
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />{" "}
        </svg>
        {dropDownState && (
          <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
            <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
              Home
            </li>
            <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
              Colleges
            </li>
            <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
              Admission
            </li>
            <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
              My College
            </li>
            <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
              Login
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
