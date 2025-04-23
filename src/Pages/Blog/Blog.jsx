import React from 'react';
import { LuCalendarCheck } from "react-icons/lu";

const Blog = ({blog}) => {
    const {question,answer,date} = blog;
    
    return (
        <div className='p-6 bg-base-100 rounded-2xl w-full'>
            <h3 className="text-2xl font-bold">{question}</h3>
            <div className="divider"></div>
            <p className='font-medium text-lg'><span className='text-blue-400'>Answer:<br/></span>{answer}</p>
            <div className="divider"></div>
            <p className='font-medium flex gap-1'>
                <span><LuCalendarCheck size={20}/></span>
                <span>Added at {date}</span>
            </p>
        </div>
    );
};

export default Blog;