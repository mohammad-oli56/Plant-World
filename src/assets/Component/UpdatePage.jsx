
import { useLoaderData, useNavigate, } from "react-router";
import { toast } from "react-toastify";

const UpdatePage = () => {
    const navigate = useNavigate()
    const plant = useLoaderData();

    const {
        _id,
        plantName,
        image,
        careLevel,
        category,
        healthStatus,
        lastWatered,
        nextWatering,
        wateringFrequency
    } = plant;

    const handleUpdatePlant = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedPlant = Object.fromEntries(formData.entries());

        fetch(`https://assingment-server-sable.vercel.app/plants/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedPlant)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount) {
                    navigate('/myplaint')
                    toast.success('Successfully Update', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",

                    })
                } else {
                    toast.info('Nothing Update', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        
                    });
                }
            });

    }




    return (
        <div className='max-w-5xl mx-auto px-6 py-12'>
            <div className='text-center mb-10'>
                <h1 className='text-4xl md:text-5xl font-bold text-green-700'>Update Plant</h1>
                <p className='mt-2 text-gray-600'>Edit the details of your plant below.</p>
            </div>

            <form onSubmit={handleUpdatePlant} className="space-y-8">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <Input label="Image URL" name="image" defaultValue={image} required />
                    <Input label="Plant Name" name="plantName" defaultValue={plantName} required />
                    <Select label="Category" name="category" defaultValue={category} options={["Succulent", "Fern", "Flowering"]} />
                    <Select label="Care Level" name="careLevel" defaultValue={careLevel} options={["Easy", "Moderate", "Difficult"]} />
                    <Input label="Watering Frequency" name="wateringFrequency" defaultValue={wateringFrequency} required />
                    <Input label="Health Status" name="healthStatus" defaultValue={healthStatus} required />
                    <Input label="Last Watered Date" name="lastWatered" defaultValue={lastWatered} type="date" required />
                    <Input label="Next Watering Date" name="nextWatering" defaultValue={nextWatering} type="date" required />
                </div>



                <div className="text-center">
                    <button type="submit" className="btn bg-green-600 text-white hover:bg-green-700 w-full md:w-1/2">
                        Update Plant
                    </button>
                </div>
            </form>
        </div>
    );
};

const Input = ({ label, name, type = "text", defaultValue, required }) => (
    <div>
        <label className="block text-sm font-medium mb-1 text-green-900">{label}</label>
        <input
            type={type}
            name={name}
            defaultValue={defaultValue}
            required={required}
            className="input input-bordered w-full"
        />
    </div>
);

const Select = ({ label, name, options, defaultValue }) => (
    <div>
        <label className="block text-sm font-medium mb-1 text-green-900">{label}</label>
        <select name={name} defaultValue={defaultValue} className="select select-bordered w-full">
            {options.map(opt => (
                <option key={opt} value={opt.toLowerCase()}>{opt}</option>
            ))}
        </select>
    </div>
);

export default UpdatePage;
