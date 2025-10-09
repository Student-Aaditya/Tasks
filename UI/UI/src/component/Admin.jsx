import React from 'react'
import {Link,Outlet} from 'react-router-dom'

function Admin() {
  return (
    <>
    <nav className="bg-black text-white p-4 flex items-center justify-between shadow-md">
        <div className="flex items-center space-x-6">
         
          <Link to="createManager" className="hover:underline">
            Create Manager
          </Link>
          <Link to="createVendor" className="hover:underline">
            Create Vendor
          </Link>
          
          <Link to="listManager" className="hover:underline">
            Manager List
          </Link>
          <Link to="listVendor" className="hover:underline">
            Vendor List
          </Link>
           <Link to="/" className="hover:underline ml-30">
            logout
          </Link>
        </div>
      </nav>
        <div className="p-6">
        <Outlet />
      </div>
    </>
  )
}

export default Admin
