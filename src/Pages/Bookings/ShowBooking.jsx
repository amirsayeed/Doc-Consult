import React from 'react';

const ShowBooking = ({appointment,handleCancel}) => {
    const {id,name,education,speciality,designation,consultation_fee} = appointment;
    
    return (
        <div className='w-full bg-base-100 p-8 rounded-2xl'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='flex flex-col items-center md:items-start gap-2'>
                    <p className='font-bold text-xl'>{name}</p>
                    <p className='font-medium text-lg text-[#0F0F0F99]'>
                        <span>{education} -</span>
                        <span> {speciality} -</span>
                        <span> {designation}</span>
                    </p>
                </div>
                <div>
                    <p className='font-medium text-[#0F0F0F99] text-lg'>Appointment Fee: {consultation_fee} Taka + Vat</p>
                </div>
            </div>
            <button onClick={()=>handleCancel(id)} className='btn rounded-3xl w-full mt-5 text-lg text-[#FF0000] border-[#FF0000] hover:bg-[#FF0000] hover:text-white'>Cancel Appointment</button>
        </div>
    );
};

export default ShowBooking;