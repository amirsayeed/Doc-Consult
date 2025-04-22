import React from 'react';
import logoImg from "../../assets/Doc-Consult-removebg-preview.png"
import { NavLink } from 'react-router';
import './Navbar.css'
const Navbar = () => {
     const links = <>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/myBookings'>My-Bookings</NavLink></li>
                    <li><NavLink to='/blogs'>Blogs</NavLink></li>
                    <li><NavLink to='/contact'>Contact Us</NavLink></li>
                  </>
    return (
        <div className="navbar max-w-7xl mx-auto plus-jakarta-sans">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {links}
                </ul>
                </div>
                <div className='flex'>
                    <img className='hidden md:flex md:w-12 h-10 object-cover' src={logoImg} alt="" />
                    <a className="btn btn-ghost font-bold text-xl md:text-3xl">Doc-Consult</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-primary rounded-3xl px-2 md:px-6">Emergency</a>
            </div>
        </div>
    );
};

export default Navbar;