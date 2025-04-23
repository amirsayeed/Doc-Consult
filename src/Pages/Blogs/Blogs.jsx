import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const blogsData = useLoaderData();
    const blogsQs = blogsData.blogs;

    return (
        <div>
            <div className='max-w-4xl text-center space-y-3'>
                <h2 className="text-4xl font-bold">Blogs</h2>
                <p>Let's explore some basic concepts that will make you a good developer</p>
            </div>
            <div className='flex flex-col gap-5 mt-10 px-1'>
                {
                    blogsQs.map(blog =><Blog key={blog.id} blog={blog}/>)
                }
            </div>
        </div>
    );
};

export default Blogs;