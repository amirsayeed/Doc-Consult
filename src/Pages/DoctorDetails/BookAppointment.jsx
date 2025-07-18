import React from 'react';
import { addAppointmentToStore } from '../../Utility/addtoStoredb';
import { TbAlertSquareRounded } from "react-icons/tb";
import { useNavigate } from "react-router";

const BookAppointment = ({docInfo}) => {
    
    const navigate = useNavigate();
    const handleBook = (id,name) =>{
        const isBooked = addAppointmentToStore(id,name);

        if(isBooked){
            navigate('/myBookings');
            window.scroll(0,0);
        }
    }

    return (
        <div className='bg-base-100 p-8 rounded-2xl mb-20 space-y-3'>
            <h2 className="text-2xl text-center font-bold text-[#141414]">Book an Appointment</h2>
            <div className='border-t border-dashed my-2'></div>
            <div className='flex justify-between items-center'>
                <p className='font-bold text-[#0F0F0F]'>Availability</p>
                <div className='bg-[#09982F1A] rounded-2xl p-2'>
                    <p className='text-[#09982F] font-medium'>Doctor Available</p>
                </div>
            </div>
            <div className='border-t border-dashed my-2'></div>
            <div className='flex gap-1 items-start md:items-center bg-[#FFA0001A] p-2 rounded-2xl max-w-6xl my-3'>
                <span className='text-[#FFA000]'><TbAlertSquareRounded size={20}/></span>
                <p className='text-[#FFA000] manrope'>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
            </div>
            <button onClick={()=>handleBook(docInfo.id, docInfo.name)} className='btn bg-[#176AE5] text-[#fff] text-lg font-medium w-full rounded-3xl mt-4'>Book Appointment Now</button>
            
        </div>
    );
};

export default BookAppointment;