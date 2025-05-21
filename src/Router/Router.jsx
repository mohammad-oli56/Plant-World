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


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Mainlayout,
        children: [
            {
                index: true,
                path: '/',
                loader: () => fetch('http://localhost:3000/plants'),
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
                path: 'allplant',
                loader: () => fetch('http://localhost:3000/plants'),
                Component: Allplant
            },
            {
                path: '/myplaint',
                Component: Myplant
            },
            {
                path: '/addplain',
                Component: Addplant
            },
            {
                path: '/details/:id',
                element: <Details />, 
                loader: ({ params }) => fetch(`http://localhost:3000/plants/${params.id}`)
            }

        ]
    },
]);