import Layout from "./layout/Layout";
import { About, Home, Properties, Login, SignUp, Contact } from "./pages/index";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import PropertyDetail from "./components/HomePage/PropertiesPage/PropertyDetail";
import UserDashboardLayout from "./layout/UserDashboardLayout";
import UserChat from "./components/UserSide/Chat/UserChat";
import AdminChat from "./components/AdminSide/Chat/AdminChat";
import Dashboard from "./components/UserSide/Dashboard/UserDashboard";
import Favorites from "./components/UserSide/Favorites/Favorites";
import Bookings from "./components/UserSide/Booking/Bookings";
import Setting from "./components/UserSide/Settings/Setting";
import AdminDashboardLayout from "./layout/AdminDashboardLayout";
import PropertyListing from "./components/AdminSide/Properties/PropertyListing";
import AdminDashboard from "./components/AdminSide/Dashboard/AdminDashboard";
import AddProperty from "./components/AdminSide/Properties/AddProperty";
import AdminSettings from "./components/AdminSide/Settings/Setting";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* home layout */}
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="properties" element={<Properties />} />
          <Route path="contact" element={<Contact />} />
          <Route path="propertyDetail" element={<PropertyDetail />} />
        </Route>

        {/* login/signup */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />

        {/* user dashboard layout */}
        <Route path="/userDashboard" element={<UserDashboardLayout />}>
          <Route index element={<Navigate to='/userDashboard/dashboard' replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="chat" element={<UserChat />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="setting" element={<Setting />} />
        </Route>

        {/* admin dashboard layout */}
        <Route path="/adminDashboard" element={<AdminDashboardLayout />}>
          <Route index element={<Navigate to="/adminDashboard/dashboard" replace />}/>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="chat" element={<AdminChat />} />
          <Route path="propertyListing" element={<PropertyListing />} />
          <Route path="propertyListing/newProperty" element={<AddProperty />} />
          <Route path="setting" element={<AdminSettings />} />
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
