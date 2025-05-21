import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { valueContext } from '../../Mainlayout/Mainlayout';

const Navbar = () => {
    const { userprofile, handelLogout } = useContext(valueContext)

    return (
        <div className="navbar bg-[#4b6043] shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <Link to='/'>Home</Link>
                        <Link to='/allplant'>All Plant</Link>
                        <Link to='/myplaint'>My Plants</Link>
                        <Link to='/addplain'>Add Plant</Link>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">🌿daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-5">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/allplant'>All Plant</NavLink>
                    <NavLink to='/myplaint'>My Plants</NavLink>
                    <NavLink to='/addplain'>Add Plant</NavLink>
                </ul>
            </div>
            <div className="navbar-end">


                <div className='flex items-center'>


                    {
                        userprofile?.email && <div className="flex">
                            <div className="relative group ml-4">
                                <div className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt='user Pic'
                                            src={userprofile.photoURL}
                                        />
                                    </div>
                                </div>
                                <ul
                                    className="menu menu-sm absolute right-0 bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200"
                                >
                                    <li><a>{
                                        userprofile?.email
                                    }</a></li>
                                </ul>
                            </div>


                        </div>
                    }

                    {
                        !userprofile?.email && <div className='flex items-center gap-3.5'>
                            <Link to='/login'><button>Login</button></Link>
                            <Link to='/signup' >Sign-up</Link>

                        </div>
                    }
                    {
                        userprofile?.email && <button
                            onClick={handelLogout}
                            className="inline-flex btn-warning items-center justify-center w-full px-5 py-2 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                        >
                          Sign-out
                        </button>

                    }


                </div>


            </div>
        </div>
    );
};

export default Navbar;