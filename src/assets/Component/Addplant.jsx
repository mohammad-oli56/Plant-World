import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { valueContext } from '../../Mainlayout/Mainlayout';

const Addplant = () => {
    const { userprofile } = useContext(valueContext);

    const handelAddPlant = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const plantData = Object.fromEntries(formData.entries());

        plantData.email = userprofile.email;

        fetch('https://assingment-server-sable.vercel.app/plants', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(plantData),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('🌿 Plant added successfully!', {
                        position: "top-right",
                        autoClose: 3000,
                        theme: "colored",
                    });
                    form.reset();
                }
            })
            .catch(() => {
                toast.error('Something went wrong. Please try again.');
            });
    };

    return (
        <div className='max-w-5xl mx-auto px-6 py-12'>
            <div className='text-center mb-10'>
                <h1 className='text-4xl md:text-5xl font-bold text-green-700'>Add a New Plant</h1>
                <p className='mt-2 text-gray-600'>Fill in the form below to add a plant to your collection.</p>
            </div>

            <form onSubmit={handelAddPlant} className="space-y-8">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                    <InputField label="Image URL" name="image" type="text" placeholder="https://example.com/image.jpg" required />
                    <InputField label="Plant Name" name="plantName" type="text" placeholder="Aloe Vera" required />

                    <SelectField label="Category" name="category" options={["Succulent", "Fern", "Flowering"]} />
                    <SelectField label="Care Level" name="careLevel" options={["Easy", "Moderate", "Difficult"]} />

                    <InputField label="Watering Frequency" name="wateringFrequency" type="text" placeholder="Every 3 days" required />
                    <InputField label="Health Status" name="healthStatus" type="text" placeholder="Healthy / Needs Attention" required />
                    <InputField label="Last Watered Date" name="lastWatered" type="date" required />
                    <InputField label="Next Watering Date" name="nextWatering" type="date" required />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 text-green-900">Description</label>
                    <textarea
                        name="description"
                        className="textarea textarea-bordered w-full"
                        placeholder="Describe this plant..."
                        rows="4"
                        required
                    ></textarea>
                </div>

                <div className="text-center">
                    <button type="submit" className="btn bg-green-600 text-white hover:bg-green-700 w-full md:w-1/2">
                        Add Plant
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Addplant;

// Reusable input component
const InputField = ({ label, name, type, placeholder, required }) => (
    <div>
        <label className="block text-sm font-medium mb-1 text-green-900">{label}</label>
        <input
            type={type}
            name={name}
            className="input input-bordered w-full"
            placeholder={placeholder}
            required={required}
        />
    </div>
);

// Reusable select component
const SelectField = ({ label, name, options }) => (
    <div>
        <label className="block text-sm font-medium mb-1 text-green-900">{label}</label>
        <select name={name} className="select select-bordered w-full">
            {options.map(option => (
                <option key={option} value={option.toLowerCase()}>{option}</option>
            ))}
        </select>
    </div>
);
