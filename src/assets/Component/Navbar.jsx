import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { valueContext } from '../../Mainlayout/Mainlayout';

const Navbar = () => {
  const { userprofile, handelLogout, theme, toggleTheme } = useContext(valueContext);

  return (
    <div className="navbar bg-[#4b6043] text-white">
      <div className="navbar-start">
        <a className="text-white text-3xl">🌿Plant-World</a>
      </div>

      <div className="navbar-center hidden lg:flex space-x-4">
        <NavLink to="/" className="btn">Home</NavLink>
        <NavLink to="/allplant" className="btn">All Plant</NavLink>
        {userprofile?.email && <NavLink to="/myplaint" className="btn">My Plants</NavLink>}
        {userprofile?.email && <NavLink to="/addplain" className="btn">Add Plant</NavLink>}
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
              <div className="btn btn-ghost btn-circle avatar">
                <div className="w-10 h-10 rounded-full overflow-hidden ring ring-blue-500 ring-offset-base-100 ring-offset-2">
                  <img
                    src={userprofile?.photoURL || 'https://via.placeholder.com/40'}
                    alt="user"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <ul className="menu menu-sm absolute right-0 bg-base-100 text-green-700 rounded-box z-10 mt-3 w-72 p-2 shadow opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
                <li><span><strong>Email:  </strong> {userprofile?.email}</span></li>
                <li><span><strong>Name:</strong> {userprofile?.displayName || 'No Name'}</span></li>
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
