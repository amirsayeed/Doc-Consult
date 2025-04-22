import React from 'react';
import { Link } from 'react-router';

const NoBookings = () => {
    return (
        <div className='text-center space-y-5 mt-10'>
            <h2 className="text-3xl font-semibold">You have not booked any appointment yet.</h2>
            <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            <Link to='/'><button className='btn btn-primary'>Book an Appointment</button></Link>
        </div>
    );
};

export default NoBookings;