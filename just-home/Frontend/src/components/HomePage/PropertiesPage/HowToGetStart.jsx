import React from 'react'
import Button from "../../Common/Button";
import { getStartGuidance } from "../../../constants";
import { NavLink } from "react-router-dom";

const HowToGetStart = () => {
  return (
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
  )
}

export default HowToGetStart