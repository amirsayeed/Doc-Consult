import React from 'react';
import logoImg from "../../assets/logo.png"
import { BsFacebook } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link, NavLink } from 'react-router';
const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-base-100 text-base-content rounded p-20">
                
                <aside>
                    <div className='flex gap-1 items-center'>
                        <img className='w-8' src={logoImg} alt="" />
                        <a className="btn btn-ghost text-2xl">Doc-Consult</a>
                    </div>    
                </aside>    
                
                <nav id='footer-nav' className="grid grid-flow-col gap-10 text-lg">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/myBookings'>My-Bookings</NavLink>
                        <NavLink to='/blogs'>Blogs</NavLink>
                        <NavLink to='/contact'>Contact Us</NavLink>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-6">
                    <Link to='https://www.facebook.com/'>
                        <BsFacebook size={25} color='blue'/>
                    </Link>
                    <Link to='https://x.com/'>
                        <FaSquareXTwitter size={25} color='black'/>
                    </Link>
                    <Link to='https://www.linkedin.com/'>
                        <FaLinkedin size={25} color='blue'/>
                    </Link>
                    <Link to='https://www.youtube.com/'>
                        <FaYoutube size={25} color='red'/>
                    </Link>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;