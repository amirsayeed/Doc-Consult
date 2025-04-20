import React from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = ({doctorsData}) => {
    return (
        <div className='my-20'>
            <div className='max-w-4xl mx-auto text-center space-y-3'>
                <h2 className="text-3xl font-semibold">Our Best Doctors</h2>
                <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {
                    doctorsData.map(doctor => <Doctor key={doctor.id} doctor={doctor}/>)
                }
            </div>
        </div>
    );
};

export default Doctors;