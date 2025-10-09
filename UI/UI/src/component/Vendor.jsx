import { Link,Outlet } from "react-router-dom";

function Vendor() {
  return (
    <>
     <nav className="bg-black text-white p-4 flex items-center justify-between shadow-md">
        <div className="flex items-center space-x-6">
         
          <Link to="vendorprofile" className="hover:underline">
            Vendor Profile
          </Link>
          <Link to="profileUpdate" className="hover:underline">
            Update Profile
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

export default Vendor;
