import Layout from "./layout/Layout"
import {About, Home, Properties,  Login, SignUp, Contact} from "./pages/index";
import { createBrowserRouter, createRoutesFromElements , Route, RouterProvider} from "react-router-dom";
import PropertyDetail from "./components/HomePage/PropertiesPage/PropertyDetail"
import Booking from "./components/UserSide/Booking";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="properties" element={<Properties />} />
          <Route path="contact" element={<Contact />} />
          <Route path="propertyDetail" element={<PropertyDetail />} />
          <Route path="booking" element={<Booking />}/>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App