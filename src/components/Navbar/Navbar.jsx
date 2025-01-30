import React from 'react';
import './Navbar.css';
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='navbar'>
      <a className="logo">FoodieApp</a>
      <FaRegCircleUser className="profile"/>
    </div>
  )
}

export default Navbar
