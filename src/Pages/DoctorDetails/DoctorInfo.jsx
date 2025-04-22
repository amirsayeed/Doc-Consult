import React from 'react';
import { BiRegistered } from "react-icons/bi";
const DoctorInfo = ({docInfo}) => {
    const {image,name,education,designation,working_place,consultation_fee,availability,registration_number} = docInfo; 

    return (
        <div className='flex gap-6 my-8 bg-base-100 p-12 rounded-2xl'>
            <div>
                <img className='rounded-3xl' src={image} alt=''/>
            </div>
            <div className='space-y-3 flex-1'>
                <h2 className="text-3xl font-bold">{name}</h2>
                <p className='text-[#0F0F0F99] text-lg font-medium'>{education}<br/>
                {designation}</p>
                <p className='text-[#0F0F0F80] text-lg font-medium'>Working at<br/>
                    <span className='text-[#0F0F0F] font-bold'>{working_place}</span>
                </p>
                <div className='border-t border-dashed my-2'></div>
                    <div className='flex gap-2 items-center'>
                        <BiRegistered size={25}/>
                        <p className='font-medium text-lg text-[#0F0F0FB3]'>Reg No: {registration_number}</p>
                    </div>
                <div className='border-t border-dashed my-2'></div>
                    <div className='flex gap-3 items-center'>
                        <p className='font-semibold'>Availability</p>
                        <div className='flex gap-3'>
                            {
                                availability.map((day,idx)=><div key={idx} className='bg-[#FFA0001A] p-2 rounded-2xl'>
                                    <p className='text-[#FFA000]'>{day}</p>
                                </div>)
                            }
                        </div>
                    </div>
                <p className='font-semibold'>Consultation Fee: <span className='text-[#176AE5]'>Taka {consultation_fee}</span> (incl. Vat) <span className='text-[#176AE5]'>Per consultation</span></p>
            </div>
        </div>
    );
};

export default DoctorInfo;