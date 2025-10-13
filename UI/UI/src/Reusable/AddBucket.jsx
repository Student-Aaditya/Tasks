import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

function AddBucket() {
const navigate=useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            name: "",
            image: "",
            created_by: ""
        }
    });

    const submitData = async (data) => {
        try {
            const res = await axios.post("http://127.0.0.1:7069/bucket/addbucket", {
                name: data.name,
                image: data.image,
                created_by: data.created_by
            })
            navigate("/superAdmin");
            console.log("Form Data:", res.data);
        } catch (err) {
            console.log(err.response?.data);
        }
    };

    return (
        <>
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    Add Bucket
                </h1>

                <form onSubmit={handleSubmit(submitData)} className="space-y-4">

                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter the bucket name"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            {...register("name", { required: "Enter the name" })}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="image" className="block text-gray-700 font-medium mb-1">
                            Image
                        </label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            {...register("image", { required: "upload the image" })}
                        />
                        {errors.image && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.image.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="created_by" className="block text-gray-700 font-medium mb-1">
                            Created By
                        </label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            {...register("created_by", { required: "Created by is required" })}
                        />
                        {errors.created_by && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.created_by.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
        </>
    );
}

export default AddBucket;
