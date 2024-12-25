import React from 'react'
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { RiFacebookFill } from 'react-icons/ri'
import logo from "../../assets/imgs/white-logo.png"
import {  NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-sky-900 py-12 mt-20'>
      <div className='container flex flex-col gap-9 px-3'>
        {/* logo/links */}
        <div className='flex justify-between items-center border-b pb-4'>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className='flex gap-4 text-2xl text-white'>
           <RiFacebookFill />
           <FaTwitter />
           <FaInstagram />
           <FaLinkedinIn />
          </div>
        </div>
        <div className='mt-5 flex flex-wrap gap-x-24 gap-y-5'>
          {/* subscribe */}
          <div className='flex flex-col gap-6'>
            <h4 className='text-xl text-gray-400'>Subscribe</h4>
            <input 
              type='email' 
              className='px-3 py-2 rounded outline-none text-[17px] w-full max-w-60' 
              placeholder='Enter your email'
            />
            <p className='text-white'>
              Subscribe to our newsletter to recieve our weekly feed
            </p>
          </div>
          {/* quick links */}
          <div className='text-white'>
            <h2 className='text-gray-400 text-xl'>Quick Links</h2>
            <div className='flex flex-col gap-3 mt-3'>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/about'>About</NavLink>
              <NavLink to='/products'>Products</NavLink>
              <NavLink to='/contact'>Contact</NavLink>
            </div>
          </div>

          {/* contact us */}
          <div className='text-white'>
            <h2 className='text-gray-400 text-xl'>
              Contact Us
            </h2>
            <div className='flex flex-col gap-3 mt-3'>
              <p>abc@gmail.com</p>
              <p>+92-888-9999999</p>
            </div>
          </div>

          {/* address */}
          <div className='text-white'>
            <h2 className='text-gray-400 text-xl'>
              Our Address
            </h2>
            <div className='flex flex-col gap-3 mt-3'>
              <p>123 Block H, Johar Town, Lahore, Punjab, Pakistan, 54782</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;