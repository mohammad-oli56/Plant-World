import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router'; // use react-router-dom (not react-router)
import { valueContext } from '../../Mainlayout/Mainlayout';

const Navbar = () => {
  const { userprofile, handelLogout, theme, toggleTheme } = useContext(valueContext);

  return (
    <div className="navbar fixed top-0 left-0 w-full z-50 bg-[#1f3522]/80 backdrop-blur-md text-white shadow-md">
      <div className="navbar-start flex items-center">
       

        {/* Hamburger menu: visible only on small devices */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#1f3522] rounded-box mt-3 w-52 p-2 shadow-lg"
          >
            <li><NavLink to="/">Homepage</NavLink></li>
            <li><NavLink to="/allplant">All Plant</NavLink></li>
            {userprofile?.email && <li><NavLink to="/myplaint">My Plants</NavLink></li>}
            {userprofile?.email && <li><NavLink to="/addplain">Add Plant</NavLink></li>}
            <li><NavLink to="/about-us">About us</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/support">Support</NavLink></li>
           {userprofile?.email && <li><NavLink to="/dashboard">Dashboard</NavLink></li>}
          </ul>
        </div>

         <a className="text-white text-3xl font-bold mr-4 flex items-center">
          <span className="sm:hidden">🌿</span>
          <span className="hidden sm:inline"> 🌿Plant-World</span>
        </a>
      </div>

      {/* Center nav links: hidden on small devices, visible on lg+ */}
      <div className="navbar-center hidden lg:flex space-x-4">
        <NavLink to="/" className={({ isActive }) => `btn ${isActive ? "btn-active" : ""}`}>Home</NavLink>
        <NavLink to="/allplant" className={({ isActive }) => `btn ${isActive ? "btn-active" : ""}`}>All Plant</NavLink>
        {userprofile?.email && (
          <>
            <NavLink to="/myplaint" className={({ isActive }) => `btn ${isActive ? "btn-active" : ""}`}>My Plants</NavLink>
            <NavLink to="/addplain" className={({ isActive }) => `btn ${isActive ? "btn-active" : ""}`}>Add Plant</NavLink>
             <NavLink to="/dashboard" className={({ isActive }) => `btn ${isActive ? "btn-active" : ""}`}>Dashboard</NavLink>
          </>
        )}
        <NavLink to="/about-us" className={({ isActive }) => `btn ${isActive ? "btn-active" : ""}`}>About us</NavLink>
        <NavLink to="/contact" className={({ isActive }) => `btn ${isActive ? "btn-active" : ""}`}>Contact</NavLink>
        <NavLink to="/support" className={({ isActive }) => `btn ${isActive ? "btn-active" : ""}`}>Support</NavLink>
       
      </div>

      <div className="navbar-end space-x-4 flex items-center">
        {/* Dark/Light Toggle Button */}
        <button onClick={toggleTheme} className="btn btn-ghost text-xl">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>

        {!userprofile?.email ? (
          <>
            <Link to="/login" className="btn">Login</Link>
            <Link to="/signup" className="btn">Sign-up</Link>
          </>
        ) : (
          <>
            {/* Profile Avatar with Hover Dropdown */}
            <div className="relative group">
              <div className="btn btn-ghost btn-circle avatar cursor-pointer">
                <div className="w-10 h-10 rounded-full overflow-hidden ring ring-blue-500 ring-offset-base-100 ring-offset-2">
                  <img
                    src={userprofile?.photoURL || 'https://via.placeholder.com/40'}
                    alt="user"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <ul className="menu menu-sm absolute right-0 bg-base-100 text-green-700 rounded-box z-10 mt-3 w-72 p-2 shadow opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
                <li><span><strong>Email: </strong>{userprofile?.email}</span></li>
                <li><span><strong>Name: </strong>{userprofile?.displayName || 'No Name'}</span></li>
              </ul>
            </div>

            <button
              onClick={handelLogout}
              className="btn btn-warning"
            >
              Sign-out
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
