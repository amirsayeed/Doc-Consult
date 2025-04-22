import React from 'react';
import { BiRegistered } from "react-icons/bi";
import { Link } from 'react-router';
const Doctor = ({doctor}) => {
    const {id,image,name,education,speciality,experience,registration_number} = doctor;

    return (
        <div className="card bg-base-100 w-96 shadow-md rounded-2xl">
        <figure>
            <img className='p-4 rounded-3xl'
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body space-y-2">
            <div className='flex gap-4'>
                <div className='badge bg-[#09982F1A] text-[#09982F] p-3 rounded-2xl'>Available</div>
                <div className='badge bg-[#176AE51A] text-[#176AE5] p-3 rounded-2xl'>{experience} Experience</div>
            </div>
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className='font-medium text-lg'>{education}-{speciality}</p>
            <div className='flex gap-2 items-center'>
                <BiRegistered size={20}/>
                <p className='font-medium'>Reg No: {registration_number}</p>
            </div>
            <div className='mt-3'>
            <Link to={`/doctors/${id}`}>
                <button onClick={()=>window.scroll(0,0)} className="btn w-full text-[#176AE5] text-lg border border-[#176AE5] rounded-3xl">View Details</button>
            </Link>
            </div>
        </div>
        </div>
    );
};

export default Doctor;