import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [viewPass, setViewPass] = useState(false);
  const [viewConfPass, setViewConfPass] = useState(false);
  const {register, handleSubmit, formState: { errors }, watch, reset} = useForm({
    reValidateMode: 'onSubmit'
  });

  const onSubmit = (data) => {
    console.log(data);
    setIsForgotPassword(false);
  };

  return (
    <div className="mt-12 w-full max-w-xl">
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center gap-16 w-full">
          <label className="sm:text-xl mt-2 text-sky-950">Name</label>
          <input
            type="text"
            value="iqra"
            disabled
            className="p-2 w-full max-w-lg outline-none border"
            placeholder="Name"
          />
        </div>

        <div className="flex items-center gap-16 w-full">
          <label className="sm:text-xl mt-2 text-sky-950">Email</label>
          <input
            type="text"
            value="iqra@gmail.com"
            disabled
            className="p-2 w-full max-w-lg outline-none border"
            placeholder="Email"
          />
        </div>

        {!isForgotPassword && (
          <div className="flex items-center gap-7 w-full">
            <label className="sm:text-xl mt-2 text-sky-950">Password</label>
            <input
              type="password"
              value="******"
              disabled
              className="p-2 w-full max-w-lg outline-none border"
              placeholder="Password"
            />
          </div>
        )}

        {isForgotPassword && (
          <div className="flex flex-col gap-2">
            {/* New Password */}
            <div className="flex items-center gap-4 w-full">
              <label htmlFor="password" className="sm:text-xl mt-2 text-sky-950">
                New Password
              </label>
              <div className="relative flex w-full items-center">
                <input
                  id="newPassword"
                  type={viewPass ? "text" : "password"}
                  className="p-2 w-full max-w-lg outline-none border"
                  {...register("newPassword", {
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
            </div>
            <p className="text-red-600 ">{errors.newPassword?.message}</p>

            {/* Confirm Password */}
            <div className="flex items-center g">
              <label htmlFor="confirmPass" className="sm:text-xl mt-2 text-sky-950">
                Confirm Password
              </label>
              <div className="relative w-full flex items-center">
                <input
                  id="confirmPass"
                  type={viewConfPass ? 'text' : 'password'}
                  className="p-2 w-full max-w-lg outline-none border"
                  {...register("confirmPass", {
                    required:  {
                      value: (watch("newPassword")),
                      message: "Please confirm your password",
                    },
                    validate: (value) => {
                      if ((watch("newPassword") !== value) && value) {
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
            </div>
            <p className="text-red-600">{errors.confirmPass?.message}</p>
          </div>
        )}

        {/* Forgot Password Button */}
        {!isForgotPassword ? (
          <button
            type="button"
            className="text-red-600"
            onClick={() => setIsForgotPassword(true)}
          >
            Forgot Password?
          </button>
        ) : (
          <div className="flex gap-4 ms-auto">
            <button
              type="button"
              className="py-2 px-4 border hover:bg-slate-50 rounded"
              onClick={() => setIsForgotPassword(false)}
              >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded"
            >
              Save Password
            </button>
          </div>
        )}
      </form>
    </div>
  )
}

export default Form