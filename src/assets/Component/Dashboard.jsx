// Dashboard.jsx

import React, { useContext, useEffect, useState } from "react";
import { valueContext } from "../../Mainlayout/Mainlayout";
import { Link } from "react-router"; // ✅ FIXED: Correct import

const Dashboard = () => {
  const { userprofile } = useContext(valueContext);
  const [myPlants, setMyPlants] = useState([]);
console.log(myPlants)
  useEffect(() => {
    if (userprofile?.email) {
      fetch(`https://assingment-server-sable.vercel.app/plants-by-email?email=${userprofile.email}`)
        .then((res) => res.json())
        .then((data) => setMyPlants(data))
        .catch((error) => {
          console.error("Error fetching user's plants:", error);
        });
    }
  }, [userprofile?.email]);

  return (
    <div className="min-h-screen bg-[#f5fdf6] px-4 py-8 md:px-10 lg:px-20">
      <h2 className="text-3xl font-bold text-[#1f3522] mb-4">📊 Dashboard</h2>
      <p className="text-gray-700 mb-6">
        Welcome back, <span className="font-medium text-green-800">{userprofile?.displayName || "Guest"}</span> 👋
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* My Plants Card */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-[#1f3522] mb-2">
            🪴 My Plants ({myPlants.length})
          </h3>
          <p className="text-gray-600 text-sm">View and manage your added plants.</p>
          <Link to="/myplaint" className="text-green-700 underline text-sm mt-2 inline-block">
            Go to My Plants →
          </Link>
        </div>

        {/* Add Plant Card */}
        <Link to="/addplain">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition cursor-pointer">
            <h3 className="text-xl font-semibold text-[#1f3522] mb-2">➕ Add Plant</h3>
            <p className="text-gray-600 text-sm">Upload a new plant with detailed info.</p>
          </div>
        </Link>

        {/* Support Card */}
        <Link to="/support">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition cursor-pointer">
            <h3 className="text-xl font-semibold text-[#1f3522] mb-2">📬 Support</h3>
            <p className="text-gray-600 text-sm">Need help? Reach out to our support team.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
