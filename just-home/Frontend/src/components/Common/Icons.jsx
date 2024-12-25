import React from 'react'
import { FaGoogle, FaTwitter } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";

const Icons = ({style1, style2}) => {
  return (
    <>
      <div className={`flex items-center ${style1}`}>
        <hr className=" border w-44 border-sky-900"/>
        <p className="mx-2">or</p>
        <hr className=" border w-44 border-sky-900"/>
      </div>
      <div className={`flex items-center justify-center gap-4 ${style2}`}>
        <FaGoogle  className="text-red-600 bg-red-200 w-12 h-11 p-3 rounded-full"/>
        <RiFacebookFill className="text-sky-600 text-2xl bg-sky-200 w-12 h-11 p-2 rounded-full"/>
        <FaTwitter className="text-xl bg-slate-300 w-12 h-11 rounded-full p-3"/>
      </div>
    </>
  )
}

export default Icons