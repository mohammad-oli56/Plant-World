import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const Myplantcard = ({ mypln, onDelete }) => {
    const {
        careLevel,
        category,
        description,
        healthStatus,
        image,
        nextWatering,
        plantName,
        wateringFrequency,
        _id
    } = mypln;

    const handelDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/plants/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your plant has been deleted.",
                                icon: "success"
                            });
                            onDelete(_id); // Inform parent to update UI
                        }
                    })
                    .catch(() => {
                        Swal.fire("Error", "Failed to delete plant.", "error");
                    });
            }
        });
    };

    return (
        <div className="card lg:card-side bg-green-50 shadow-md rounded-lg border border-green-200">
            <figure className="w-full lg:w-1/3 h-fit overflow-hidden">
                <img
                    src={image || "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"}
                    alt={plantName}
                    className="object-cover w-full h-full"
                />
            </figure>
            <div className="card-body text-green-900 lg:w-2/3">
                <h2 className="card-title text-2xl font-bold">PlantName :{plantName}</h2>
                <p className="text-sm text-green-800"><span className="font-medium">Category:</span> {category || 'N/A'}</p>
                <p className="text-sm text-green-800"><span className="font-medium">Watering Frequency:</span> {wateringFrequency}</p>
                <p className="text-sm text-green-800"><span className="font-medium">Next Watering:</span> {nextWatering || 'Not scheduled'}</p>
                <p className="text-sm text-green-800"><span className="font-medium">Care Level:</span> {careLevel || 'Moderate'}</p>
                <p className="text-sm text-green-800"><span className="font-medium">Health Status:</span> {healthStatus || 'Healthy'}</p>
                <p className="text-sm mt-2 italic text-green-700">Description :{description}</p>

                <div className="card-actions justify-end mt-4">
                    <Link to={`/update/${_id}`}>
                     <button className="btn btn-success">Edit</button>
                    </Link>
                   
                    <button onClick={() => handelDelete(_id)} className="btn btn-error text-white">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Myplantcard;
