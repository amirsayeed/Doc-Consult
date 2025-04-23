import React from 'react';
import scDoctor from '../../assets/success-doctor.png'
import scPatient from '../../assets/success-patients.png'
import scReview from '../../assets/success-review.png'
import scStaff from '../../assets/success-staffs.png'
import CountUp from 'react-countup';
const AnimateCard = () => {

    return (
        <div className='flex flex-wrap items-center justify-center md:justify-between gap-4 px-1 text-[#0F0F0F]'>
            <div className='card bg-base-100 w-60 py-4 pl-8 rounded-2xl flex flex-col items-start gap-4'>
                <figure>
                    <img src={scDoctor} alt=''/>
                </figure>
                <div className='space-y-2'>
                    <span className='text-3xl md:text-5xl font-bold text-[#0F0F0F]'>
                    <CountUp delay={0} start={0} end={199} enableScrollSpy duration={3}>
                        {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                    +</span>

                    <p className='text-xl text-[#0F0F0F99] font-semibold'>Total Doctors</p>
                </div>
            </div>
            <div className='card bg-base-100 w-60 py-4 pl-6 rounded-2xl flex flex-col items-start gap-4'>
                <figure>
                    <img src={scReview} alt=''/>
                </figure>
                <div className='space-y-2'>
                    <span className='text-3xl md:text-5xl font-bold text-[#0F0F0F]'>
                        <CountUp delay={0} start={0} end={467} enableScrollSpy duration={3}>
                            {({ countUpRef }) => <span ref={countUpRef} />}
                        </CountUp>+</span>
                    <p className='text-xl text-[#0F0F0F99] font-semibold'>Total Reviews</p>
                </div>
            </div>
            <div className='card bg-base-100 w-60 py-4 pl-6 rounded-2xl flex flex-col items-start gap-4'>
                <figure>
                    <img src={scPatient} alt=''/>
                </figure>
                <div className='space-y-2'>
                    <span className='text-3xl md:text-5xl font-bold text-[#0F0F0F]'>
                        <CountUp delay={0} start={0} end={1900} enableScrollSpy duration={3}>
                            {({ countUpRef }) => <span ref={countUpRef} />}
                        </CountUp>+</span>
                    <p className='text-xl text-[#0F0F0F99] font-semibold'>Patients</p>
                </div>
            </div>
            <div className='card bg-base-100 w-60 py-4 pl-6 rounded-2xl flex flex-col items-start gap-4'>
                <figure>
                    <img src={scStaff} alt=''/>
                </figure>
                <div className='space-y-2'>
                    <span className='text-3xl md:text-5xl font-bold text-[#0F0F0F]'>
                        <CountUp delay={0} start={0} end={300} enableScrollSpy duration={3}>
                            {({ countUpRef }) => <span ref={countUpRef} />}
                        </CountUp>+</span>
                    <p className='text-xl text-[#0F0F0F99] font-semibold'>Total Staffs</p>
                </div>
            </div>
        </div>
    );
};

export default AnimateCard;