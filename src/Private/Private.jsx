import React, { useContext } from 'react';
import { valueContext } from '../Mainlayout/Mainlayout';
import { Navigate, useLocation } from 'react-router';

const Private = ({ children }) => {

     const { userprofile, loding } = useContext(valueContext)
     const location = useLocation();
     console.log(location)

    if (loding) {
        return <div className="flex flex-col items-center justify-center min-h-screen space-y-2">
            <span className="loading loading-infinity loading-xl text-primary"></span>
            <h1 className="text-lg font-semibold  text-primary">
                Loading <span className="loading loading-dots loading-md text-primary"></span>
            </h1>
        </div>
    }

    if (!userprofile?.email) {
        return <Navigate to="/login" state={{ from: location.pathname }} />;
    }


    return (
        <div>
            {children}
        </div>
    );
};

export default Private;