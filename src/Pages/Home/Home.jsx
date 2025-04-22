import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Doctors from '../Doctors/Doctors';
import { useLoaderData } from 'react-router';
import Services from '../Services/Services';

const Home = () => {
    const doctorsData = useLoaderData();
    return (
        <div className='plus-jakarta-sans'>
            <Banner/>
            <Doctors doctorsData={doctorsData}/>
            <Services/>
        </div>
    );
};

export default Home;