import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import DoctorInfo from './DoctorInfo';
import BookAppointment from './BookAppointment';
import { ToastContainer} from 'react-toastify';
import DoctorErrorPage from './DoctorErrorPage';
const DoctorDetails = () => {
    const allDoctors = useLoaderData();
    // console.log(allDoctors);
    const {docId} = useParams()
    // console.log(docId)
    const docIdInt = parseInt(docId);
    const docInfo = allDoctors.find(info => info.id === docIdInt)
    
    return (
        <>
        { docInfo &&
        <div className='plus-jakarta-sans'>
            <div className='bg-base-100 rounded-2xl p-12'>
                <div className='max-w-4xl mx-auto text-center space-y-4'>
                    <h2 className="text-3xl font-bold text-[#141414]">Doctor’s Profile Details</h2>
                    <p className='font-medium text-lg text-[#141414B3]'>Discover reputable physicians, their specialties, and the care they provide in one location—your health is our first priority.</p>
                </div>
            </div>
            <ToastContainer />
            <DoctorInfo docInfo={docInfo}/>
            <BookAppointment docInfo={docInfo}/>
        </div>}
        {!docInfo && <DoctorErrorPage/>}
        </>
    );
};

export default DoctorDetails;