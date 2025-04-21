import React from 'react';
import scDoctor from '../../assets/success-doctor.png'
import scPatient from '../../assets/success-patients.png'
import scReview from '../../assets/success-review.png'
import scStaff from '../../assets/success-staffs.png'
import CountUp from 'react-countup';
const AnimateCard = () => {

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-4'>
            <div className='card bg-base-100 w-60 py-4 pl-8 rounded-2xl flex flex-col items-start gap-4'>
                <figure>
                    <img src={scDoctor} alt=''/>
                </figure>
                <div>
                    <span className='text-5xl font-bold'><CountUp delay={0} start={0} end={199} enableScrollSpy duration={3} />+</span>
                    <p className='text-xl'>Total Doctors</p>
                </div>
            </div>
            <div className='card bg-base-100 w-60 py-4 pl-6 rounded-2xl flex flex-col items-start gap-4'>
                <figure>
                    <img src={scReview} alt=''/>
                </figure>
                <div>
                    <span className='text-5xl font-bold'><CountUp delay={0} start={0} end={467} enableScrollSpy duration={3} />+</span>
                    <p className='text-xl'>Total Reviews</p>
                </div>
            </div>
            <div className='card bg-base-100 w-60 py-4 pl-6 rounded-2xl flex flex-col items-start gap-4'>
                <figure>
                    <img src={scPatient} alt=''/>
                </figure>
                <div>
                    <span className='text-5xl font-bold'><CountUp delay={0} start={0} end={1900} enableScrollSpy duration={3} />+</span>
                    <p className='text-xl'>Patients</p>
                </div>
            </div>
            <div className='card bg-base-100 w-60 py-4 pl-6 rounded-2xl flex flex-col items-start gap-4'>
                <figure>
                    <img src={scStaff} alt=''/>
                </figure>
                <div>
                    <span className='text-5xl font-bold'><CountUp delay={0} start={0} end={300} enableScrollSpy duration={3} />+</span>
                    <p className='text-xl'>Total Staffs</p>
                </div>
            </div>
        </div>
    );
};

export default AnimateCard;