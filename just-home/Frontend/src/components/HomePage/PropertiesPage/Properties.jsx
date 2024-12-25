import { useState } from "react";
import PropertyCard from "./PropertyCard";
import Pagination from "../../Common/Pagination";
import Button from "../../Common/Button";
import { getStartGuidance,properties } from "../../../constants";
import { NavLink } from "react-router-dom";

const Properties = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = properties.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const allPages = Math.ceil(properties.length / productsPerPage);
  console.log(allPages);

  return (
    <div>
      <div className="h-[550px] w-full border bg-no-repeat bg-cover bg-[url('/src/assets/imgs/propertyHero1.jpg')]">
        <div className="flex flex-col items-center mt-48">
          <h1 className="text-4xl font-semibold text-sky-900 ">
            Unlock Endless Possibilities
          </h1>
          <p className="text-xl text-gray-600 mt-3">
            Browse through our handpicked properties to find the one that’s just
            right for you.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <div className="border-b px-9 pb-3 flex items-center">
          <h2 className="text-2xl text-sky-800 font-semibold ">
            Properties For Rent
          </h2>
          <div className="mx-auto mb-3 w-full max-w-4xl flex gap-3">
            <input
              type="text"
              className="py-2 px-4 w-full max-w-lg shadow border text-xl border-gray-300 rounded-lg focus:outline-sky-800"
              placeholder="Search"
            />
            <select className="p-3 border border-gray-300 focus:outline-sky-800 rounded-md">
              <option value="">Select Price Range</option>
              <option value="110-210">110PKR-210PKR</option>
              <option value="210-310">210PKR-310PKR</option>
              <option value="310-410">310PKR-410PKR</option>
              <option value="510-610">510PKR-610PKR</option>
            </select>
            <Button text="Search Now" className="bg-orange-500 text-lg" />
          </div>
        </div>

        {/* properties */}
        <div className="container mt-14">
          <div className="grid grid-cols-4 gap-x-6 gap-y-12">
            {currentProducts.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            allPages={allPages}
          />
        </div>
      </div>

      {/* how to get started */}
      <div>
        <h1 className="text-4xl text-sky-900 text-center mt-20">
          How to Get Started
        </h1>
        <div className="bg-[#f7911c] py-12 mt-7">
          <div className="grid grid-cols-2 place-items-center w-full max-w-7xl mx-auto">
            {getStartGuidance.map((content, index) => (
              <div
                key={index}
                className="border px-7 py-9 flex flex-col w-full max-w-lg shadow-lg bg-white"
              >
                <content.icon className="text-3xl text-orange-500 mb-4" />
                <h2 className="text-2xl font-semibold text-sky-800 mb-1">
                  {content.heading}
                </h2>
                <p className="text-lg tracking-wide">
                  {content.beforeSpan}{" "}
                  <span className="font-semibold">{content.heading}</span>{" "}
                  {content.afterSpan}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="mt-12 text-xl">
            Need help or have questions? Feel free to reach out to us for any
            assistance!
          </p>
          <NavLink to="/contact">
            <Button
              text="Contact Us"
              className="border-2 border-slate-300 text-sky-900 hover:bg-slate-300 transition-all duration-100"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Properties;
