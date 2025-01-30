import React from 'react';
import './Sidebar.css';
import { IoAddCircleOutline } from "react-icons/io5";
import { BiSolidFoodMenu } from "react-icons/bi";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
          <IoAddCircleOutline />
          <p>Add Items</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
          <BiSolidFoodMenu />
          <p>List Items</p>
        </NavLink>
        <NavLink to='/orders' className="sidebar-option">
          <BiSolidFoodMenu />
          <p>Orders</p>
        </NavLink>
      </div>
      
    </div>
  )
}

export default Sidebar
