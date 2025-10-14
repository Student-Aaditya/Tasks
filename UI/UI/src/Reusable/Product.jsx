import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
  
function Product() {
    const [medicines, setMedicines] = useState([]);
    const { id } = useParams(); 
    console.log("Bucket ID:", id);

    useEffect(() => {
        async function GetMedicine() {
            try {
                const res = await axios.get(`http://127.0.0.1:7069/medicine/getMedicine/${id}`);
                setMedicines(res.data);
                console.log("Medicines:", res.data);
            } catch (err) {
                console.log(err.response?.data || err.message);
            }
        }
        GetMedicine();
    }, [id]);

    return (
        <>
            <h1 className='text-2xl font-bold mb-4'>Medicine Card</h1>
            <div className='flex flex-wrap'>
                {medicines.length > 0 ? (
                    medicines.map((medicine) => (
                        <div
                            key={medicine.id}
                            className='h-auto w-80 rounded-2xl bg-white shadow-lg shadow-yellow-400/40 m-5 border border-gray-300'
                        >
                            <img
                                src={medicine.image || "/medic.jpg"}
                                alt={medicine.name}
                                className='w-full rounded-xl h-48 object-cover hover:shadow-xl/30'
                            />
                            <div className='p-4'>
                                <h2 className='text-xl font-bold'>{medicine.name}</h2>
                                <p className='text-sm text-gray-700 mt-1'>
                                    <strong>Salt Composition:</strong> {medicine.salt_composition}
                                </p>
                                <p className='text-sm text-gray-700'>
                                    <strong>Manufacturer:</strong> {medicine.manufacturers}
                                </p>
                                <p className='text-sm text-gray-700'>
                                    <strong>Type:</strong> {medicine.medicine_type}
                                </p>
                                <p className='text-sm text-gray-700'>
                                    <strong>Packaging:</strong> {medicine.packaging} ({medicine.packaging_typ})
                                </p>

                                <div className='mt-3'>
                                    <p className='text-sm'>
                                        <strong>MRP:</strong> ₹{medicine.mrp}
                                    </p>
                                    <p className='text-sm'>
                                        <strong>Cost Price:</strong> ₹{medicine.cost_price}
                                    </p>
                                    <p className='text-sm'>
                                        <strong>Discount:</strong> {medicine.discount_percent}%
                                    </p>
                                    <p className='text-sm font-semibold'>
                                        <strong>Selling Price:</strong> ₹{medicine.selling_price}
                                    </p>
                                    <p className='text-sm'>
                                        <strong>Offer:</strong> {medicine.offers_percent}%
                                    </p>
                                </div>

                                <p className='text-sm mt-2'>
                                    <strong>Prescription Required:</strong>{" "}
                                    {medicine.prescription_required ? "Yes" : "No"}
                                </p>
                                <p className='text-sm'>
                                    <strong>Storage:</strong> {medicine.storage}
                                </p>
                                <p className='text-sm'>
                                    <strong>Country of Origin:</strong> {medicine.country_of_origin}
                                </p>
                                <p className='text-sm'>
                                    <strong>Manufacture Address:</strong> {medicine.manufacture_address}
                                </p>
                                <p className='text-sm mt-2'>
                                    <strong>Best Price:</strong> ₹{medicine.best_price}
                                </p>
                                <p className='text-sm'>
                                    <strong>Brought:</strong> {medicine.brought}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='text-gray-500'>No medicines found for this bucket.</p>
                )}
            </div>
        </>
    );
}

export default Product;
