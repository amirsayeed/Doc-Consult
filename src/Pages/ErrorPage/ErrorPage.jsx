import React from 'react';
import errorImg from '../../assets/robot-with-404-error-free-vector.jpg'
const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-5'>
            <img className='w-[300px] h-[250px] rounded-2xl object-cover' src={errorImg} alt="" />
            <h3 className="text-3xl text-center font-bold">Status: 404<br/> Page Not Found</h3>
        </div>
    );
};

export default ErrorPage;