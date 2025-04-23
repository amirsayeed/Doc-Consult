import React from 'react';
import './Banner.css'
import bannerImg from '../../assets/banner-img-1.png'
const Banner = () => {
    return (
        <div id='banner-div'>
            <div className='p-20 text-center space-y-8'>
                <div className='max-w-4xl mx-auto space-y-5 text-[#0F0F0F]'>
                    <h1 className="text-3xl lg:text-5xl font-bold">Dependable Care, Backed by Trusted Professionals.</h1>
                    <p className='font-medium'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                </div>
                <form className="space-y-2">
                    <input type="text" placeholder='Search any doctor' className=' text-[#9CA3AF] rounded-3xl w-full md:w-1/2 p-2 bg-white'/>
                    <input type="submit" value="Search Now" className='btn bg-[#176AE5] text-[#fff] ml-2 rounded-3xl px-2 md:px-6 lg:px-10 font-medium'/>
                </form>
                <div className='flex flex-col md:flex-row items-center justify-center gap-5'>
                    <div className='w-full md:w-1/2'>
                        <img className='rounded-xl' src={bannerImg} alt="" />
                    </div>
                    <div className='w-full md:w-1/2'>
                        <img className='rounded-xl' src={bannerImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;