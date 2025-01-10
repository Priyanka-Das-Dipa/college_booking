import { useEffect, useRef, useState, type FormEvent } from "react";
import logo from "../../../images/logo.png";
import { Link, NavLink } from "react-router";
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
   
      <nav className=" flex items-center justify-between bg-white px-4 py-2 text-black shadow-md shadow-[#f65d0a6d]">
        <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className="hidden items-center justify-between gap-10 md:flex">
          <li className="group flex font-bold cursor-pointer flex-col">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#f6520a]" : "text-black"
              }
            >
              Home
            </NavLink>

            <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#f6520a] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group flex font-bold cursor-pointer flex-col">
            <NavLink
              to="/college"
              className={({ isActive }) =>
                isActive ? "text-[#f6520a]" : "text-black"
              }
            >
              Colleges
            </NavLink>
            <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#f6520a] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group flex font-bold cursor-pointer flex-col">
            <NavLink
              to="/admission"
              className={({ isActive }) =>
                isActive ? "text-[#f6520a]" : "text-black"
              }
            >
              Admission
            </NavLink>
            <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#f6520a] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group flex font-bold cursor-pointer flex-col">
            <NavLink
              to="/myCollege"
              className={({ isActive }) =>
                isActive ? "text-[#f6520a]" : "text-black"
              }
            >
              {" "}
              My College
            </NavLink>
            <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#f6520a] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group flex font-bold cursor-pointer flex-col">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "text-[#f6520a]" : "text-black"
              }
            >
              Login
            </NavLink>
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
            <ul className=" z-10 text-base gap-2  bg-[#f6510adf]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg  ">
              <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-[#f60a0a] ">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="cursor-pointer  px-6 py-2 text-white hover:bg-[#f60a0a] ">
                <NavLink to="/college">Colleges</NavLink>
              </li>
              <li className="cursor-pointer  px-6 py-2 text-white hover:bg-[#f60a0a] ">
                <NavLink to="/admission">Admission</NavLink>
              </li>
              <li className="cursor-pointer  px-6 py-2 text-white hover:bg-[#f60a0a] ">
                <NavLink to="/myCollege"> My College</NavLink>
              </li>
              <li className="cursor-pointer  px-6 py-2 text-white hover:bg-[#f60a0a] ">
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          )}
        </div>
      </nav>
  
  );
};

export default Navbar;
