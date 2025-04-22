import React from 'react';
import errorImg from '../../assets/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space-site-crash-on-technical-work-web-design-template-with-chatbot-mascot-cartoon-o.jpg'
import { Link } from 'react-router';
const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-5'>
            <img className='w-[350px] h-[250px] rounded-2xl object-cover' src={errorImg} alt="" />
            <h3 className="text-4xl text-center font-bold text-red-500">404 - Page Not Found</h3>
            <p>Oops! The page you're looking for doesn't exist!</p>
            <Link to='/'>
                <button className='btn btn-primary rounded-xl'>Go Back Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;