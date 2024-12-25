import { RxCross2 } from "react-icons/rx";
import Button from "./Button";
import { useRef } from "react";

const Modal = ({children, onClose}) => {
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
      <div className='bg-white shadow-lg rounded w-full max-w-xl mx-auto mt-56'>
        <Button 
          text={<RxCross2 size={35} className="text-black"/>} 
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  )
}

export default Modal