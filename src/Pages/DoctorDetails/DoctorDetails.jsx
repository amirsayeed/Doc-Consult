import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import DoctorInfo from './DoctorInfo';
import BookAppointment from './BookAppointment';
const DoctorDetails = () => {
    const allDoctors = useLoaderData();
    // console.log(allDoctors);
    const {docId} = useParams()
    // console.log(docId)
    const docIdInt = parseInt(docId);
    const docInfo = allDoctors.find(info => info.id === docIdInt)

    return (
        <div>
            <div className='bg-base-100 rounded-2xl p-12'>
                <div className='max-w-4xl mx-auto text-center space-y-4'>
                    <h2 className="text-3xl font-semibold">Doctor’s Profile Details</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis turpis imperdiet mattis donec dignissim volutpat.</p>
                </div>
            </div>
            <DoctorInfo docInfo={docInfo}/>
            <BookAppointment/>
        </div>
    );
};

export default DoctorDetails;