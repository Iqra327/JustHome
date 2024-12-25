import React from 'react';
import { useForm } from 'react-hook-form';
import contactPh from "../../../assets/imgs/contactPh.png";
import Button from '../../Common/Button';
import Info from './Info';
import { toast } from 'react-toastify';

const MainForm = () => {
  
  const { register, handleSubmit, formState , reset} = useForm({
      reValidateMode: 'onSubmit'
    });
  
  const { errors } = formState;
  
  const onSubmit = (data) => {
    console.log(data);
    reset();
    toast.success('Message sent!')
  }

  return (
    <div className="container bg-white shadow-xl border mt-14 "> 
      <div className="grid grid-cols-2 gap-4 p-7">
        {/* contact form */}
        <div className='px-7 py-8'>
          <h2 class="text-2xl text-sky-900 font-semibold mb-1">
            Get in Touch
          </h2>
          <h1 className='text-lg text-sky-950 mb-6'>
            Complete the information below and we'll get back to you soon!
          </h1>

          <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)} noValidate >
            <label htmlFor='name' className='sm:text-xl mt-2 text-sky-950'>
              Name
            </label>
            <input 
              id='name' 
              type='text' 
              className='border p-2 rounded outline-slate-400'
              {...register('name',{
                required: 'Please enter your name',
              })}
            />
          
            <label htmlFor='email' className='sm:text-xl mt-2 text-sky-950'>
              Email
            </label>
            <input 
              id='email' 
              type='email' 
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

            <label htmlFor='message' className='sm:text-xl mt-2 text-sky-950'>
              Message
            </label>
            <textarea
              id='message'
              type='text'
              rows={5}
              className='border p-2 rounded outline-slate-400 w-full resize-none'
              {...register("message", {
                required: "Please write a message",
                validate: (value) => {
                  const wordCount = value.trim().split(/\s+/).length;
                  return wordCount >= 15 || "Message must be at least 15 words long!";
                }
              })}
            />
            <p className="text-red-600">
              {errors.message?.message}
            </p>
            <Button 
              text='Send' 
              className='bg-[#e4eef7] mt-3 text-sky-900 text-xl hover:bg-[#c5dbef]'
            />
          </form>
        </div>

        {/* contact information */}
        <div className=''>
          <div className='py-8'>
            <h2 class="text-2xl text-sky-900 font-semibold mb-1">
              Contact Information
            </h2>
            <p className='text-lg text-sky-950 mb-6'>
              For immediate assistance, reach out using the provided information.
            </p>
            <Info />
          </div>
          <div className=''>
            <img 
              src={contactPh} 
              alt='img' 
              className='mx-auto object-contain'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainForm