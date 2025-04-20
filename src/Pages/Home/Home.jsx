import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Doctors from '../Doctors/Doctors';
import { useLoaderData } from 'react-router';

const Home = () => {
    const doctorsData = useLoaderData();
    return (
        <div>
            <Banner/>
            <Doctors doctorsData={doctorsData}/>
        </div>
    );
};

export default Home;