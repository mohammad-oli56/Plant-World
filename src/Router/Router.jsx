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


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Mainlayout,
    children:[
        {
            index:true,
            path:'/',
            Component:Home
        },
        {
            path:'/login',
            Component:Login
        },
        {
            path:'/signup',
            Component:Signup
        },
        {
            path:'allplant',
            Component:Allplant
        },
        {
            path:'/myplaint',
            Component:Myplant
        },
        {
            path:'/addplain',
            Component:Addplant
        }
    ]
  },
]);