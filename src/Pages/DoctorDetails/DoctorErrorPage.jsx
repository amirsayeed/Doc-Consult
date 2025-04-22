import React from 'react';
import { Link, useParams } from 'react-router';

const DoctorErrorPage = () => {
    const {docId} = useParams();
    console.log(docId);
    return (
        <div className='bg-base-100 px-6 py-10 rounded-2xl my-20 text-center space-y-5'>
            <h2 className="text-4xl font-bold">No Doctor Found!!</h2>
            <p className='font-medium text-lg'>No doctor found with Id : {docId}<br/> Please enter valid ID and try again</p>
            <Link to="/">
                <button className='btn btn-primary'>View All Doctors</button>
            </Link>
        </div>
    );
};

export default DoctorErrorPage;