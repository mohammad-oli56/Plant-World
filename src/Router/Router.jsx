import React from 'react';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import Mainlayout from '../Mainlayout/Mainlayout';
import Home from '../assets/Component/Home';
import Login from '../assets/Component/Login';
import Signup from '../assets/Component/Signup';
import Allplant from '../assets/Component/Allplant';
import Myplant from '../assets/Component/Myplant';
import Addplant from '../assets/Component/Addplant';
import Details from '../assets/Component/Details';
import UpdatePage from '../assets/Component/UpdatePage';
import Private from '../Private/Private';
import Error from '../assets/Component/Error';
import Profile from '../assets/Component/Profile';
import AboutUsSection from '../assets/Component/AboutUsSection';
import Contact from '../assets/Component/Contact';
import SupportSection from '../assets/Component/SupportSection';
import Dashboard from '../assets/Component/Dashboard';


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Mainlayout,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                path: '/',
                loader: () => fetch('https://assingment-server-sable.vercel.app/plants'),
                Component: Home
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/signup',
                Component: Signup
            },
            {
                path: '/allplant',
                loader: () => fetch('https://assingment-server-sable.vercel.app/plants'),
                // Component: Allplant,
                element: <Allplant></Allplant>
            },
            {
                path: '/myplaint',
                element: <Private><Myplant></Myplant></Private>
                // Component: Myplant
            },
            {
                path: '/addplain',
                element: <Private><Addplant></Addplant></Private>
                // Component: Addplant
            },
            {
                path: '/details/:id',
                element: <Private><Details /></Private>,
                loader: ({ params }) => fetch(`https://assingment-server-sable.vercel.app/plants/${params.id}`)
            },
            {
                path: '/update/:id',
                loader: ({ params }) => fetch(`https://assingment-server-sable.vercel.app/plants/${params.id}`),
                element: <UpdatePage></UpdatePage>

            },
            {
                path: "/profile",
                element: <Private> <Profile></Profile></Private>
            },
            {
                path:'/about-us',
                element:<AboutUsSection></AboutUsSection>
            },
            {
                path :'/contact',
                element: <Contact />
            },
            {
                path:'/support',
                element: <SupportSection></SupportSection>
            },
            {
                path:'/dashboard',
                element: <Private><Dashboard></Dashboard></Private>
            }

        ]
    },
]);