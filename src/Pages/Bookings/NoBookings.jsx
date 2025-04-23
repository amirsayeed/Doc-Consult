import React from 'react';
import { Link } from 'react-router';

const NoBookings = () => {
    return (
        <div className='space-y-5 mt-20 flex flex-col items-center justify-center px-2 md:px-0 plus-jakarta-sans text-[#0F0F0F]'>
            <h2 className="text-2xl md:text-3xl font-bold">You have not booked any appointment yet.</h2>
            <p className='font-medium'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            <Link to='/'><button className='btn bg-[#176AE5] rounded-2xl text-[#fff]'>Book an Appointment</button></Link>
        </div>
    );
};

export default NoBookings;