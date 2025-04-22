import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = ({doctorsData}) => {
    const [viewAll,setViewAll] = useState(false);
    const [showDoctors, setShowDoctors] = useState([]);

    useEffect(()=>{
        if(viewAll){
            setShowDoctors(doctorsData);
        }else{
            setShowDoctors(doctorsData.slice(0,6));
        }
    },[doctorsData,viewAll])

    return (
        <div className='my-20'>
            <div className='max-w-4xl mx-auto text-center space-y-3 px-2 md:px-0'>
                <h2 className="text-2xl md:text-3xl font-semibold">Our Best Doctors</h2>
                <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5 mt-10 px-1'>
                {
                    showDoctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}/>)
                }
            </div>
            <div className='text-center'>
                <button onClick={()=>setViewAll(prv=>!prv)} className='btn btn-primary rounded-3xl mt-10'>{viewAll ? 'View Less':'View All Doctors' }</button>
            </div>
        </div>
    );
};

export default Doctors;