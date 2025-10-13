import Button from '@mui/material/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

function MedicineCard() {
  const [bucket, setbucket] = useState([]);

  useEffect(() => {
    async function BucketData() {
      try {
        const res = await axios.get("http://127.0.0.1:7069/bucket/getbucket");
        setbucket(res.data);
        
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    BucketData();
  }, []);

  return (
    <>

    <div className="flex justify-between items-center mb-6">
       <h1 className="text-2xl font-bold text-gray-800">Card Details</h1>
        <Link to="/bucket" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md" >
         ADD Bucket CARD </Link> </div>
      <div className="flex flex-wrap ">

        {bucket.map((item, index) => (
          <div
            key={item.id || index}
            className="flex flex-wrap w-165 ml-5 mb-4 border p-4 rounded-lg shadow"
          >
            {/* Image Section */}
            <div className="w-48 h-48 border rounded-lg overflow-hidden bg-gray-100">
              <img
                src={item.image}
                alt="Medicine"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details Section */}
            <div className="flex-1 ml-6 grid content-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h2>
                <Link
                  to="/Product"
                  className="text-blue-600 hover:underline mt-1 inline-block"
                >
                  View Card
                </Link>

                  <Link
                  to="/Product"
                  className="text-blue-600 hover:underline mt-1 inline-block"
                >
                  Add Medicine Card
                </Link>
                <Outlet />
              </div>

              <div className="flex items-center gap-3 mt-4">
                <select
                  name="vendor"
                  id="vendor"
                  className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                >
                  <option value="1">Suraj</option>
                  <option value="2">Bharat</option>
                  <option value="3">Tushar</option>
                  <option value="4">Pinki</option>
                </select>
                <Button variant="contained" color="warning" >
                  SEND
                </Button>
                <span>CreatedBy: {item.created_by}</span>
              </div>
            </div>
          </div>
        ))}

      </div>
    </>
  );
}

export default MedicineCard;
