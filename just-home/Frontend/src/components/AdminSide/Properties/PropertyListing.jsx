import { NavLink } from "react-router-dom";

const PropertyListing = () => {
  return (
    <div>
      <NavLink to='/adminDashboard/propertyListing/newProperty'>
        <button>+ Add Property</button>
      </NavLink>
    </div>
  );
};

export default PropertyListing;