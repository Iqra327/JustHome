import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Hero, MainForm } from './index'

const ContactPage = () => {

  return (
    <>
      {/* hero */ }  
      <Hero />

      {/* below hero */}
      <MainForm />
      
      {/* toast */}
      <ToastContainer autoClose={2000}/>
    </>
  )
}

export default ContactPage