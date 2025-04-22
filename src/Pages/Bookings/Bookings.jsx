import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredAppointment, removeFromStore } from '../../Utility/addtoStoredb';
import ShowBooking from './ShowBooking';
import Chart from '../Chart/Chart';
import NoBookings from './NoBookings';
import { ToastContainer,toast} from 'react-toastify';

const Bookings = () => {
    const [booked, setBooked] = useState([]);
    const allData = useLoaderData();

    useEffect(()=>{
        const getBooked = getStoredAppointment();
        const getBookedInt = getBooked.map(id => parseInt(id));
        //console.log(getBookedInt);
        const bookedAppointment = allData.filter(booking=> getBookedInt.includes(booking.id));
        setBooked(bookedAppointment);
    },[])

    const handleCancel = id =>{
        removeFromStore(id);
        const currentlyBooked = getStoredAppointment();
        const currentlyBookedInt = currentlyBooked.map(appointId=>parseInt(appointId));
        const remainingBooked = allData.filter(remaining => currentlyBookedInt.includes(remaining.id));
        setBooked(remainingBooked);
        toast.error('Appointment Cancelled');
    }

    return (
        <div>
            <ToastContainer/>
            {booked.length===0 ? 
            <NoBookings/> : 
            (<div className='bg-base-100 rounded-2xl p-6'>
                <Chart booked={booked}/>
            </div>)}
            {
             booked.length > 0 && 
            <div className='my-20 text-center space-y-3'>
                <h2 className="text-3xl font-bold">My Today Appointments</h2>
                <p className='text-[#0F0F0F]'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>

                <div className='flex flex-col gap-6 items-center justify-center mt-8'>
                    {
                        booked.map((appointment,idx)=> <ShowBooking key={idx} appointment={appointment} handleCancel={handleCancel}/> )
                    }
                </div>
            </div>
            }
        </div>
    );
};

export default Bookings;