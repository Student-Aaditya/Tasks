
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import SuperAdmin from './component/SuperAdmin'
import Admin from './component/Admin'
import Manager from './component/Manager'
import Vendor from './component/Vendor'
import AdminCreate from './Pages/superAdmin/AdminCreate'
import ManagerCreate from './Pages/superAdmin/ManagerCreate'
import VendorCreate from './Pages/superAdmin/VendorCreate'
import AdminList from './Pages/superAdmin/AdminList'
import ManagerList from './Pages/superAdmin/ManagerList'
import VendorList from './Pages/superAdmin/VendorList'
import CreateManager from './Pages/admin/CreateManager'
import CreateVendor from './Pages/admin/CreateVendor'
import MangersList from './Pages/admin/MangersList'
import VendorsList from './Pages/admin/VendorsList'
import VendorProfile from './Pages/vendor/VendorProfile'
import VendorUpdate from './Pages/vendor/VendorUpdate'
import ManagerProfile from './Pages/manager/ManagerProfile'
import UpdateManager from './Pages/manager/UpdateManager'
import MedicineCard from './Pages/superAdmin/MedicineCard'
import Product from './Reusable/Product'
import Input from './Reusable/Input'
import AddBucket from './Reusable/AddBucket'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>

        <Route path="/superAdmin" element={<SuperAdmin />}>
          <Route path="Admin" element={<AdminCreate />}>
          </Route>
          <Route path="Manager" element={<ManagerCreate />}>
          </Route>
          <Route path="Vendor" element={<VendorCreate />}>
          </Route>
          <Route path="adminList" element={<AdminList />}>
          </Route>
          <Route path="managerList" element={<ManagerList />}>
          </Route>
          <Route path="vendorList" element={<VendorList />}>
          </Route>
          <Route path="medicProduct" element={<MedicineCard />}>

          </Route>

        </Route>

        <Route path="/Product/:id" element={<Product />}>
        </Route>
                <Route path="/Input/:id" element={<Input />}>
        </Route>

         <Route path="/bucket" element={<AddBucket />}>
        </Route>

        {/* admin */}
        <Route path="/admin" element={<Admin />}>
          <Route path="createManager" element={<CreateManager />}>
          </Route>
          <Route path="createVendor" element={<CreateVendor />}>
          </Route>
          <Route path="listManager" element={<MangersList />}>
          </Route>
          <Route path="listVendor" element={<VendorsList />}>
          </Route>
        </Route>

        {/* manager */}
        <Route path="/manager" element={<Manager />}>
          <Route path="managerprofile" element={<ManagerProfile />}>
          </Route>
          <Route path="managerProfileUpdate" element={<UpdateManager />}>
          </Route>
        </Route>

        {/* vendor */}
        <Route path="/vendor" element={<Vendor />}>
          <Route path="vendorprofile" element={<VendorProfile />}>
          </Route>
          <Route path="profileUpdate" element={<VendorUpdate />}>
          </Route>
        </Route>

      </Routes >

    </>
  )
}

export default App
