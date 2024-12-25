import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import "../styles/loginSignUp.css";
import loginHome from "../assets/imgs/loginHome.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import Button from "../components/Common/GradientButton.jsx";
import Icons from "../components/Common/Icons.jsx";
import SideDiv from "../components/Common/SideDiv.jsx";

const Login = () => {

  const [viewPass, setViewPass] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [customError, setCustomError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    },100)
    return () => clearTimeout(timer);
  },[]);

  const { register, handleSubmit, formState , reset, clearErrors} = useForm({
    reValidateMode: 'onSubmit'
  });

  const { errors } = formState;

  const info = [
    {
      email: 'abc@gmail.com',
      password: 'Qw123@ty'
    },
    {
      email: 'xyz@gmail.com',
      password: 'Ab347%Ok'
    }
  ]

  const onSubmit = (data,e) => {
    e.preventDefault();
    console.log(data);
    setCustomError('');

    const user = info.find(
      (detail) => detail.email === data.email && detail.password === data.password
    );
  
    if (user) {
      reset();
      toast.success('Login Successful!');
      setTimeout(() => {
        navigate('/');
      }, 1400);
      console.log('okk i ma clear');
    } else {
      setCustomError('Invalid email or password');
    }
  }

  return (
    <div className="px-4">
      <p className="text-center text-lg mt-3 mb-3 tracking-wide">
        Don't have an account? 
        <Link to='/signup' className="text-sky-700 underline font-bold underline-offset-2">Sign Up</Link>
      </p>
      <div className='main-div'>
      
      {/* first div */}
        <div className={`p-4 w-full login-left ${animate ? 'animate' : ''}`}>
          <h1 className='lg:text-4xl md:text-3xl max-md:text-2xl font-bold text-sky-400 mt-3 ms-8'>
            Find your place!
          </h1>
        
          {/* form div */}
          <div className='flex flex-col lg:mt-28 max-lg:mt-20 max-md:mt-12 max-w-sm max-950:max-w-[300px] max-md:max-w-sm m-auto'>
            <h1 className='font-bold lg:text-3xl md:text-2xl max-md:text-xl text-gray-500 text-center mb-2'>
              Welcome Back!
            </h1>
            <p className="text-center font-semibold mb-6 text-gray-400">
              Access Your Account to Start Your Journey
            </p>
  
            {/* form */}
            <form className='flex flex-col gap-1 ' onSubmit={handleSubmit(onSubmit)} noValidate >
              <label htmlFor='email' className='sm:text-xl text-sky-950'>
                Email
              </label>
              <input 
                id='email' 
                type='email'
                onChange={() => clearErrors('validity')} 
                className='border p-2 rounded outline-slate-400'
                autoComplete="email"
                {...register('email',{
                  required: 'Please enter your email',
                  pattern:{
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Email is invalid'
                  }
                })}
              />
  
              <p className="text-red-600">
                {errors.email?.message}
              </p>

              <label htmlFor='password' className='sm:text-xl mt-2 text-sky-950'>
                Password
              </label>
              <div className="relative flex items-center">
              <input
                  id="password"
                  type={viewPass ? "text" : "password"}
                  className="border p-2 rounded outline-slate-400 w-full"
                  {...register("password", {
                    required: "Please enter your password",
                    // pattern: {
                    //   // value:
                    //   //   /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    //   message:
                    //     "Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character",
                    // },
                  })}
                />
                <button 
                  type="button" 
                  className="absolute right-4" 
                  onClick={() => setViewPass((prev) => !prev)}
                >
                  {
                    viewPass ? <MdOutlineRemoveRedEye /> : <IoEyeOffOutline />
                  }
                </button>
              </div>
            
              <p className="text-red-600">
                {errors.password?.message}
              </p>

              {
                customError && 
                <p className="text-red-600">
                  {customError}
                </p>
              }
              
              <Button text='Login'/>

              {/* icons section */}
              <Icons style1="mt-3" style2="mt-6"/>
            </form>
          </div>
        </div>
     
        {/* second div */}
        <SideDiv 
          heading='Start your journey with ease, rent your dream home today!'
          img={loginHome}
          className={`login-right ${animate ? 'animate' : ''}`}
        />
        <ToastContainer autoClose={1000}/>
      </div>
    </div>    
  )
}

export default Login;