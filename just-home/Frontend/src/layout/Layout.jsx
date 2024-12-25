import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Common/Footer';
import Header from '../components/Common/Header';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout