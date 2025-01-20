const Card = ({title, counting, subText,className}) => {
  return (
    <div className="bg-white w-full max-w-md p-6 shadow-lg text-center flex flex-col gap-4 ">
      <h2 className="text-2xl text-gray-600 tracking-wide">
        {title}
      </h2>
      <p className={`text-4xl font-semibold ${className}`}>
        {counting}
      </p>
      <p className="text-sm text-gray-500 mt-2">
        {subText}
      </p>
    </div>
  )
}

export default Card