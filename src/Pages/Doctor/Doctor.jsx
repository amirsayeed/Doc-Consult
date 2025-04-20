import React from 'react';

const Doctor = ({doctor}) => {
    const {image,name,education,speciality,experience,registration_number} = doctor;
    return (
        <div className="card bg-base-100 w-96 shadow-md rounded-2xl">
        <figure>
            <img className='p-4'
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div className="card-body space-y-2">
            <div className='flex gap-4'>
                <div className='badge bg-gray-300 p-3'>Available</div>
                <div className='badge bg-gray-300 p-3'>{experience} Experience</div>
            </div>
            <h2 className="text-2xl">{name}</h2>
            <p className='font-medium'>{education}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary w-full rounded-3xl">View Details</button>
            </div>
        </div>
        </div>
    );
};

export default Doctor;