import React from 'react';

function Product() {
  const medicine = {
    id: "101",
    name: "Paracetamol 650",
    salt_composition: "Paracetamol",
    manufacturers: "Cipla Ltd.",
    medicine_type: "Tablet",
    packaging: "Strip of 15",
    packaging_typ: "Blister Pack",
    mrp: 120,
    cost_price: 95,
    discount_percent: 10,
    selling_price: 108,
    offers_percent: 5,
    prescription_required: true,
    storage: "Store below 25°C",
    country_of_origin: "India",
    manufacture_address: "Cipla Industrial Area, Mumbai",
    best_price: 105,
    brought: "500+",
    image: "/medic.jpg",
  };

  return (
    <>
    
      <h1>Medicine Card</h1>
      <div className='flex flex-wrap'>
      <div className='h-auto w-80 rounded-2xl bg-white shadow-lg shadow-yellow-400/40 m-5 border border-gray-300'>
        <img
          src="/medic.jpg"
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


    {/* 2 */}

      <div className='h-auto w-80 rounded-2xl bg-white shadow-lg shadow-yellow-400/40 m-5 border border-gray-300'>
        <img
          src="/medic.jpg"
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

      {/* 3 */}

      <div className='h-auto w-80 rounded-2xl bg-white shadow-lg shadow-yellow-400/40 m-5 border border-gray-300'>
        <img
          src="/medic.jpg"
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

      {/* 4 */}

      <div className='h-auto w-80 rounded-2xl bg-white shadow-lg shadow-yellow-400/40 m-5 border border-gray-300'>
        <img
          src="/medic.jpg"
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
      </div>
    </>
  );
}

export default Product;
