import { MdDelete, MdDeleteOutline, MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { updateUserPassword, updateUserProfile, removeUserProfile } from "../../../../api/userApi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../redux/slices/authSlice";
import profile from "../../../assets/imgs/blankProfile.png"

const Form = () => {
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [viewPass, setViewPass] = useState(false);
  const [viewConfPass, setViewConfPass] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  const {register, handleSubmit, formState: { errors }, watch} = useForm({
    reValidateMode: 'onSubmit'
  });

  //handling profile image upload functionality
  const handleProfileImageUpload = async (e) => {
    console.log('entered in console')
    const {avatarId} = user;
    const file = e.target.files[0]; 
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("avatarId", avatarId);
      try {
        console.log('updating profile')
        const response = await updateUserProfile(user.id, formData, token);
        const updatedUser = response?.data?.user;
        dispatch(loginUser({ user: updatedUser , token}));
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  }

  //handling profile image remove functionality
  const handleProfileImageRemove = async () => {
    console.log('hi entered');
    const {avatarId} = user;
    try {
      console.log('hi i am try')
      console.log(token)
      const response = await removeUserProfile(user.id, { avatarId }, token);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  
  //handling updating password functionalty
  const handlePasswordUpdate = async (data) => {
    console.log(data);

    const { newPassword } = data;
    if(newPassword){
      try {
        const response = await updateUserPassword(user.id, { newPassword }, token);
        console.log(response);
      } catch (error) {
        console.log(error)
      }
    }

    setIsForgotPassword(false);
  };

  return (
    <div className="mt-6 w-full max-w-xl">
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(handlePasswordUpdate)}>
        <div className="w-full max-w-52 mx-auto mb-6 flex flex-col items-center gap-3">
          <div className="rounded-full w-32 h-32 border">
            <img
              src={user?.avatar ? user.avatar : profile}
              alt="profile"
              className="rounded-full w-32 h-32 object-cover border"
            />
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="profileImage" className="text-lg cursor-pointer">
            {user.avatar ? 'Change Profile' : 'Upload Profile'}
            </label>
            {
              user.avatar && 
                <button type="button" onClick={() => handleProfileImageRemove()}>
                  <MdDeleteOutline size={20} color="red" cursor='pointer'/>
                </button> 
            }         
          </div>
          <input 
            type="file" 
            id="profileImage"
            hidden
            accept=".jpg,.jpeg,.png"
            onChange={(e) => { handleProfileImageUpload(e)}}
          />
        </div>

        <div className="flex items-center gap-16 w-full">
          <label className="sm:text-xl mt-2 text-sky-950">Username</label>
          <input
            type="text"
            value={user.username}
            disabled
            className="p-2 w-full max-w-lg outline-none border"
            placeholder="Name"
          />
        </div>

        <div className="flex items-center gap-16 w-full">
          <label className="sm:text-xl mt-2 text-sky-950">Email</label>
          <input
            type="text"
            value={user.email}
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