import React from 'react'

const SideDiv = ({heading, img, className}) => {
  return (
    <div className={`w-full max-w-2xl h-[739px] bg-[#77a9cf] rounded-2xl flex justify-center mt-4 mb-7 mx-6 relative overflow-hidden pt-6 px-3 pe-7 border-[#77a9cf] border-l-[20px] max-md:hidden z-10 ${className}`}>
      <div className="border-white border rounded-2xl w-full max-w-lg h-[620px] mt-12 px-14 max-950:px-6 pt-8 z-20 bg-white bg-opacity-30 backdrop-blur-sm shadow-lg">
        <div className="rounded-2xl">
          <h1 className="text-white tracking-wide font-semibold text-3xl max-950:text-2xl leading-snug">
            {heading}
          </h1>
          <img src={img} className="size-[480px] max-950:size-[400px] object-cover absolute right-0 bottom-0 rounded-2xl"/>
        </div>
      </div>
      <div className="w-[900px] h-[800px] rounded-full border-[50px] border-[#8fbedb] absolute top-64 -left-[520px]"></div>
      <div className="w-[800px] h-[700px] rounded-full border-[50px] border-[#8fbedb] absolute top-80 -left-[500px]"></div>
      <div className="w-[700px] h-[600px] rounded-full border-[50px] border-[#8fbedb] absolute top-96 -left-[470px]"></div>
      <div className="absolute w-5 h-5 top-80 left-44 bg-orange-400 rounded-full"></div>
      <div className="absolute w-20 h-20 bg-sky-400 rounded-full -bottom-12 bg-opacity-60"></div>
    </div>
  )
}

export default SideDiv