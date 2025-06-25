import React, { useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import Doctors from '../Doctors/Doctors';
import { useLoaderData } from 'react-router';
import Services from '../Services/Services';

const Home = () => {
    const doctorsData = useLoaderData();
    // console.log(doctorsData);
    const [search,setSearch] = useState('');
    const [isSearch, setIsSearch] = useState(false);

    const handleSearch = (e) =>{
        e.preventDefault();
        const searchTxt = e.target.name.value;
        const filterItems = doctorsData.filter(item => 
            item?.name?.toLowerCase().includes(searchTxt .toLowerCase()) || 
            item?.speciality?.toLowerCase().includes(searchTxt .toLowerCase()));
        //console.log(filterItems);
        setSearch(filterItems);
        setIsSearch(true);
        if(searchTxt === '') {
            setIsSearch(false);
        };
    }

    return (
        <div className='plus-jakarta-sans'>
            <Banner handleSearch={handleSearch}/>
            <Doctors doctorsData={doctorsData} isSearch={isSearch} search={search}/>
            <Services/>
        </div>
    );
};

export default Home;