import React, { useContext, useState } from 'react';
import { updateProfile } from 'firebase/auth';
 // Adjust this path as needed
// import { Helmet } from 'react-helmet-async';
import { valueContext } from '../../Mainlayout/Mainlayout';

const Profile = () => {
  const { userprofile } = useContext(valueContext);
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(userprofile?.displayName || '');

  const handleNameUpdate = async () => {
    if (!newName.trim()) return alert("Name can't be empty");

    try {
      await updateProfile(userprofile, { displayName: newName });
      alert('Name updated successfully!');
      setEditing(false);
      window.location.reload(); // refresh UI with updated name
    } catch (error) {
      console.error('Update failed:', error);
      alert('Failed to update name');
    }
  };

  if (!userprofile) return <p className="text-center mt-10">Loading user data...</p>;

  return (
    <>
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4">
      <div className="bg-white border-2 border-purple-300 shadow-lg rounded-xl p-6 w-full max-w-md text-center">
        
       
        <div className="flex justify-center">
          <img
            className="w-28 h-28 rounded-full border-4 border-purple-500 object-cover"
            src={userprofile.photoURL }
            alt="User avatar"
          />
        </div>

        {/* Email Box */}
        <div className="mt-6 p-3 border border-purple-300 bg-purple-50 rounded">
          <p className="text-purple-700 font-bold uppercase text-sm">Email</p>
          <p className="text-purple-600 break-words text-sm">{userprofile.email || 'No email provided'}</p>
        </div>

        {/* Name Box + Edit */}
        <div className="mt-6">
          {!editing ? (
            <>
            <Helmet><title>Movieverse | Profile</title></Helmet>
              <div className="p-3 border border-purple-400 bg-purple-50 rounded mb-2">
              <p className="text-purple-700 font-bold uppercase text-sm">Name</p>
                <h2 className="text-2xl font-bold text-purple-700">
                  {userprofile.displayName || 'Unnamed User'}
                </h2>
              </div>
              <button
                onClick={() => setEditing(true)}
                className="bg-gradient-to-r from-purple-600  to-red-500 text-white uppercase px-4 py-2 text-sm font-semibold rounded shadow hover:opacity-90 transition"
              >
                Edit Name
              </button>
            </>
          ) : (
            <div>
              <input
                className="border border-purple-300 px-3 py-2 rounded w-full mb-3 text-black font-bold"
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <div className="flex justify-center gap-3">
                <button
                  onClick={handleNameUpdate}
                  className="bg-gradient-to-r from-purple-600 via-blue-500 to-red-500 text-white uppercase px-4 py-2 text-sm font-semibold rounded hover:opacity-90"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setEditing(false);
                    setNewName(userprofile.displayName || '');
                  }}
                  className="bg-gradient-to-r from-gray-400 to-gray-600 text-white uppercase px-4 py-2 text-sm font-semibold rounded hover:opacity-90"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        
      </div>
    </div>
    </>
  );
};

export default Profile;
