import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { valueContext } from '../../Mainlayout/Mainlayout';

const Addplant = () => {
    const {userprofile} = useContext(valueContext)
    // console.log(userprofile.email)

    const handelAddPlant = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const plantData = Object.fromEntries(formData.entries())
        console.log(plantData)

        plantData.email = userprofile.email;
        // send data to server


        fetch('http://localhost:3000/plants', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(plantData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('🦄 Wow so easy!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                       
                    });
                    // form.reset()
                }
            })
    }


    return (
        <div className='p-24'>
            <div className='p-12 text-center space-y-4'>
                <h1 className='text-6xl'>Add Plants</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, nulla voluptatibus!</p>
            </div>

            <form onSubmit={handelAddPlant}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {/* Image URL */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label">Image URL</label>
                        <input type="text" name="image" className="input w-full" placeholder="https://example.com/image.jpg" required />
                    </fieldset>

                    {/* Plant Name */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label">Plant Name</label>
                        <input type="text" name="plantName" className="input w-full" placeholder="Aloe Vera" required />
                    </fieldset>

                    {/* Category */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label">Category</label>
                        <select name="category" className="select w-full">
                            <option value="succulent">Succulent</option>
                            <option value="fern">Fern</option>
                            <option value="flowering">Flowering</option>
                        </select>
                    </fieldset>

                    {/* Care Level */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label">Care Level</label>
                        <select name="careLevel" className="select w-full">
                            <option value="easy">Easy</option>
                            <option value="moderate">Moderate</option>
                            <option value="difficult">Difficult</option>
                        </select>
                    </fieldset>

                    {/* Watering Frequency */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label">Watering Frequency</label>
                        <input type="text" name="wateringFrequency" className="input w-full" placeholder="Every 3 days" required />
                    </fieldset>

                    {/* Health Status */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label">Health Status</label>
                        <input type="text" name="healthStatus" className="input w-full" placeholder="Healthy / Needs Attention" required />
                    </fieldset>

                    {/* Last Watered Date */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label">Last Watered Date</label>
                        <input type="date" name="lastWatered" className="input w-full" required />
                    </fieldset>

                    {/* Next Watering Date */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label">Next Watering Date</label>
                        <input type="date" name="nextWatering" className="input w-full" required />
                    </fieldset>
                </div>

                {/* Description */}
                <fieldset className="mt-6 bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <label className="label">Description</label>
                    <textarea name="description" className="textarea w-full" placeholder="Describe this plant..." rows="4" required></textarea>
                </fieldset>

                {/* Submit */}
                <div className="mt-8 text-center">
                    <button type="submit" className="btn w-full">Add Plant</button>
                </div>
            </form>
        </div>
    );
};

export default Addplant;