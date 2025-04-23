import React from 'react';
import logoImg from "../../assets/Doc-Consult-removebg-preview.png"
import { BsFacebook } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from 'react-router';
const Footer = () => {
    return (
        <div className="plus-jakarta-sans">
            <footer className="footer footer-horizontal footer-center bg-base-100 text-base-content rounded p-20">
                
                <aside>
                    <div className='flex flex-col md:flex-row items-center gap-2'>
                        <img className='w-12 h-10 object-cover' src={logoImg} alt="" />
                        <a className="btn btn-ghost text-3xl font-bold text-[#0F0F0F]">Doc-Consult</a>
                    </div>    
                </aside>    
                
                <nav id='footer-nav' className="flex flex-col md:flex-row gap-10 text-lg text-[#0F0F0FB3] font-medium">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/myBookings'>My-Bookings</NavLink>
                        <NavLink to='/blogs'>Blogs</NavLink>
                        <NavLink to='/contact'>Contact Us</NavLink>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-6">
                        <a href="https://www.facebook.com/" target="_blank">
                        <BsFacebook size={25} color="blue" />
                        </a>
                        <a href="https://x.com/" target="_blank">
                        <FaSquareXTwitter size={25} color="black" />
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank">
                        <FaLinkedin size={25} color="blue" />
                        </a>
                        <a href="https://www.youtube.com/" target="_blank">
                        <FaYoutube size={25} color="red" />
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;