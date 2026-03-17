import { NavLink } from "react-router";
import './NavBar.css'
import { FaGithub } from "react-icons/fa";
import LogoImage from "../../assets/logo.png"


const NavBar = () => {
  const links = <>
    <li>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-[16px] font-semibold hover:bg-transparent hover:text-purple-700 ${isActive ? "active" : ""
          }`
        }
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/apps"
        className={({ isActive }) =>
          `text-[16px] font-semibold hover:bg-transparent hover:text-purple-700 ${isActive ? "active" : ""
          }`
        }
      >
        Apps
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/installation"
        className={({ isActive }) =>
           `font-semibold text-[16px] hover:bg-transparent hover:text-purple-700 ${isActive ? "active" : ""
          }`
        }
      >
        Installation
      </NavLink>
    </li>
  </>

  return (
    <>
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="text-sm md:text-xl font-bold flex items-center">
            <img src={LogoImage} alt="Logo" className="h-10 w-10" /> <span className="uppercase text-purple-600 ml-2">Hero.Io</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a href="https://github.com/mdalamin0" target="_blank" className='btn  bg-linear-120 from-[#9F62F2] to-[#632EE3] 
      px-4 py-2 rounded text-sm md:text-[16px] font-semibold text-white cursor-pointer 
       transition-opacity duration-300 hover:opacity-80 '>
            <FaGithub size={22} /> Contribute
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;