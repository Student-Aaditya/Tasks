import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";


function Input() {
  const {id}=useParams();
    console.log("bucket id",id);


  const [formData, setFormData] = useState({
    id: "",
    name: "",
    salt_composition: "",
    manufacturers: "",
    medicine_type: "",
    packaging: "",
    packaging_typ: "",
    mrp: "",
    cost_price: "",
    discount_percent: "",
    selling_price: "",
    offers_percent: "",
    prescription_required: false,
    storage: "",
    country_of_origin: "",
    manufacture_address: "",
    best_price: "",
    brought: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  const finalData = {
    ...formData,
    bucket_id: id,  
  };

  try {
    const res = await axios.post("http://127.0.0.1:7069/medicine/addmedicine", finalData);
    console.log("Response:", res.data);
    alert("Medicine Added Successfully!");
  } catch (err) {
    console.error(err);
    alert("Failed to add medicine");
  }
};

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add Prescription Medicine</h2>
      
      <form onSubmit={handleSubmit} className="grid gap-4">
        
        {/* ID */}
        <input
          type="text"
          name="id"
          placeholder="Medicine ID"
          value={formData.id}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Medicine Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* Salt Composition */}
        <input
          type="text"
          name="salt_composition"
          placeholder="Salt Composition"
          value={formData.salt_composition}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* Manufacturer */}
        <input
          type="text"
          name="manufacturers"
          placeholder="Manufacturer"
          value={formData.manufacturers}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* Medicine Type */}
        <input
          type="text"
          name="medicine_type"
          placeholder="Medicine Type"
          value={formData.medicine_type}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* Packaging */}
        <input
          type="text"
          name="packaging"
          placeholder="Packaging (e.g., Strip of 15)"
          value={formData.packaging}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* Packaging Type */}
        <input
          type="text"
          name="packaging_typ"
          placeholder="Packaging Type (e.g., Blister Pack)"
          value={formData.packaging_typ}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* MRP */}
        <input
          type="number"
          name="mrp"
          placeholder="MRP"
          value={formData.mrp}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* Cost Price */}
        <input
          type="number"
          name="cost_price"
          placeholder="Cost Price"
          value={formData.cost_price}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* Discount Percent */}
        <input
          type="number"
          name="discount_percent"
          placeholder="Discount Percentage"
          value={formData.discount_percent}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* Selling Price */}
        <input
          type="number"
          name="selling_price"
          placeholder="Selling Price"
          value={formData.selling_price}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* Offer Percent */}
        <input
          type="number"
          name="offers_percent"
          placeholder="Offers Percentage"
          value={formData.offers_percent}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* Prescription Required */}
        <label className="flex items-center">
          <input
            type="checkbox"
            name="prescription_required"
            checked={formData.prescription_required}
            onChange={handleChange}
            className="mr-2"
          />
          Prescription Required
        </label>

        {/* Storage */}
        <input
          type="text"
          name="storage"
          placeholder="Storage Info"
          value={formData.storage}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* Country of Origin */}
        <input
          type="text"
          name="country_of_origin"
          placeholder="Country of Origin"
          value={formData.country_of_origin}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* Manufacture Address */}
        <input
          type="text"
          name="manufacture_address"
          placeholder="Manufacture Address"
          value={formData.manufacture_address}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* Best Price */}
        <input
          type="number"
          name="best_price"
          placeholder="Best Price"
          value={formData.best_price}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* Brought */}
        <input
          type="text"
          name="brought"
          placeholder="Brought Count (e.g., 500+)"
          value={formData.brought}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* Image */}
        <input
          type="text"
          name="image"
          placeholder="Image File Name or URL"
          value={formData.image}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-3 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Input;
