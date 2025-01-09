import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import "../styles/loginSignUp.css";
import person from "../assets/imgs/person.png";
import Button from "../components/Common/GradientButton.jsx";
import Icons from "../components/Common/Icons.jsx";
import SideDiv from "../components/Common/SideDiv.jsx";
import { signup } from "../../api/authApi.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [viewPass, setViewPass] = useState(false);
  const [viewConfPass, setViewConfPass] = useState(false);
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    },100)
    return () => clearTimeout(timer);
  },[]);
  
  const { register, handleSubmit, formState, watch, reset } = useForm({
    reValidateMode: 'onSubmit'
  });
  const { errors } = formState;

  const onSubmit = async (data, e) => {
    e.preventDefault();
    console.log(data);

    try {
      const response = await signup(data);
      console.log(response)
      toast.success(response?.data?.message, {
        autoClose: 1000
      });      

      setTimeout(() => {
        navigate('/login');
      }, 1400);
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message, {
        autoClose: 1200
      });
    }
  };

  return (
    <div className='px-4'>
      <p className="text-center text-lg mt-3 mb-3 tracking-wide">
        Already have an account? 
        <Link to="/login" className="text-sky-700 underline underline-offset-2 font-bold">
          Login
        </Link>
      </p>
      <div className="main-div">

      {/*first div  */}
        <SideDiv 
          heading='Join Us and Begin Your Search for the Perfect Place!'
          img={person}
          className={`login-left ${animate ? 'animate' : ''}`}
        />

      {/* second div */}
        <div className={`p-4 w-full login-right ${animate ? 'animate' : ''}`}>

          <div className="flex flex-col mt-7 md:mt-3 max-w-sm max-950:max-w-[300px] max-md:max-w-sm m-auto">
            <h1 className="font-bold text-3xl text-gray-500 text-center mb-5 lg:text-3xl md:text-2xl max-sm:text-xl">
              Create an Account
            </h1>

            {/* form */}
            <form
              className="flex flex-col gap-1"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label htmlFor="username" className="sm:text-xl text-sky-950">
                Username
              </label>
              <input
                id="username"
                type="text"
                className="border p-2 rounded outline-slate-400 w-full"
                autoComplete="username"
                {...register("username", {
                  required: "Please enter your username",
                  pattern: {
                    value: /^(?=.*[0-9])(?=.*[@._])[a-zA-Z0-9@._]{5,}$/,
                    message: "Username must be at least 5 characters, include a special character like @ . _ and a number",
                  },
                })}
              />
              
              <p className="text-red-600">
                {errors.username?.message}
              </p>

              <label htmlFor="email" className="sm:text-xl mt-2 text-sky-950">
                Email
              </label>
              <input
                id="email"
                type="text"
                className="border p-2 rounded outline-slate-400"
                autoComplete="email"
                {...register("email", {
                  required: "Please enter your email",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Email format is invalid",
                  },
                })}
              />
              
              <p className="text-red-600">
                {errors.email?.message}
              </p>

              <label htmlFor="password" className="sm:text-xl mt-2 text-sky-950">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  id="password"
                  type={viewPass ? "text" : "password"}
                  className="border p-2 rounded outline-slate-400 w-full"
                  {...register("password", {
                    required: "Please enter your password",
                    pattern: {
                      value:
                        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.,/;:])[A-Za-z\d@$!%*?&.,/;:]{8,}$/,
                      message:
                        "Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character",
                    },
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

              <label htmlFor="confirmPass" className="sm:text-xl mt-2 text-sky-950">
                Confirm Password
              </label>
              <div className="relative flex items-center">
                <input
                  id="confirmPass"
                  type={viewConfPass ? 'text' : 'password'}
                  className="border p-2 rounded outline-slate-400 w-full"
                  {...register("confirmPass", {
                    required:  {
                      value: (watch("username") && watch("email") && watch("password")) && !watch("confirmPass"),
                      message: "Please confirm your password",
                    },
                    validate: (value) => {
                      if ((watch("password") !== value) && value) {
                        return "Password doesn't match";
                      }
                    },
                  })}
                />
                <button 
                  type="button"
                  className="absolute right-4" 
                  onClick={() => setViewConfPass((prev) => !prev)}
                >
                  {
                    viewConfPass ? <MdOutlineRemoveRedEye /> : <IoEyeOffOutline />
                  }
                </button>
              </div>
              <p className="text-red-600">
                {errors.confirmPass?.message}
              </p>

              <Button text='Sign Up'/>
            
              {/* icons section */}
              <Icons style1='mt-2' style2='mt-3'/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;