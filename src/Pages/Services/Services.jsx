import React from 'react';
import AnimateCard from './AnimateCard';

const Services = () => {
    return (
        <div className='my-20'>
            <div className='max-w-4xl mx-auto text-center space-y-3'>
                <h2 className="text-xl md:text-3xl font-semibold">We Provide Best Medical Services</h2>
                <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            </div>
            <div className='mt-10'>
                <AnimateCard/>
            </div>
        </div>
    );
};

export default Services;