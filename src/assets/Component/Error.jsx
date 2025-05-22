import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-purple-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded transition duration-300"
        >
          Go to Home
        </Link>
      </div>
    </div>
    );
};

export default Error;