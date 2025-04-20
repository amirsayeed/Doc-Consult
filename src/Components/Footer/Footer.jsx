import React from 'react';
import logoImg from "../../assets/logo.png"
import { BsFacebook } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
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
                
                <nav className="grid grid-flow-col gap-10 text-lg">
                        <a>Home</a>
                        <a>My-Bookings</a>
                        <a>Blogs</a>
                        <a>Contact Us</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-6">
                    <a>
                        <BsFacebook size={25} color='blue'/>
                    </a>
                    <a>
                        <FaSquareXTwitter size={25} color='black'/>
                    </a>
                    <a>
                        <FaLinkedin size={25} color='blue'/>
                    </a>
                    <a>
                        <FaYoutube size={25} color='red'/>
                    </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;