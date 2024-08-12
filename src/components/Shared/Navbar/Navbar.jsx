import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/genius_car/logo.svg";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";

const Navbar = () => {
  const navbar = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={"/services"}>Services</NavLink>
      </li>
      <li>
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100">
      <div className="navbar  lg:container lg:mx-auto mx-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navbar}
            </ul>
          </div>
          <Link to={"/"} className=" text-xl">
            <img src={logo} alt="Genius logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex font-bold ">
          <ul className="menu menu-horizontal px-1 text-lg gap-3">{navbar}</ul>
        </div>
        <div className="navbar-end gap-5">
          <IoBagOutline className="text-2xl" />
          <CiSearch className="text-2xl" />
          <button className="text-[#FF3811] font-bold border border-[#FF3811] px-5 py-3 rounded-md">
            Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
