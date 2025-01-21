import { useRef } from "react";

const Modal = ({children, onClose, className, title}) => {
  const modalRef = useRef();
  
  const onBackdropClick = (e) => {
    if(modalRef.current === e.target){
      onClose();
    }
  }
  
  return (
    <div
      ref={modalRef}
      onClick={onBackdropClick} 
      className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur z-20'>
      <div className={`bg-white shadow-lg rounded w-full max-w-xl mx-auto py-4 ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold ">{title}</h3>
        <button onClick={onClose} className="text-red-500">
          Close
        </button>
      </div>
        {children}
      </div>
    </div>
  )
}

export default Modal