import React, { Suspense } from 'react';
import {
  createBrowserRouter
} from "react-router";
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Bookings from '../Pages/Bookings/Bookings';
import Blogs from '../Pages/Blogs/Blogs';
import DoctorDetails from '../Pages/DoctorDetails/DoctorDetails';
import DoctorErrorPage from '../Pages/DoctorDetails/DoctorErrorPage';

const loadingBars = <span className='flex items-center justify-center'>
                      <span className="loading loading-bars loading-lg"></span>
                      <span className="loading loading-bars loading-xl"></span>
                    </span>

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage/>,
    children:[
        {
          index: true, 
          Component:Home,
          hydrateFallbackElement: loadingBars,
          loader: () => fetch('../doctors.json')
        },
        {
          path: '/doctors/:docId',
          loader: ()=> fetch('../doctors.json'),
          Component: DoctorDetails,
          hydrateFallbackElement: loadingBars,
          errorElement: <DoctorErrorPage/>
        },
        {
          path: 'myBookings',
          Component: Bookings,
          loader: () => fetch('../doctors.json'),
          hydrateFallbackElement: loadingBars
        },
        {
          path: 'blogs',
          Component: Blogs
        },
        {
          path: 'contact',
          Component: ErrorPage,
        }
    ]
  },
  {
    path: '*',
    Component: ErrorPage
  }
]);