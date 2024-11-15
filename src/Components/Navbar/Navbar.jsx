import React from 'react';
// import { CiSearch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineNotifications } from "react-icons/md";

const Navbar = () => {
    return (
        <div className='py-5 px-4 bg-white'>
           <div className="navbar bg-base-100">
  <div className="flex-1">
    <div className='flex flex-col gap-0'>
    <h5 className=" text-[14px] text-[#707EAE] font-[500]">Hi Wade Warren,</h5>
    <h2 className='text-[#263E6B] text-[28px] font-[700]'>Welcome to BinneryTech!</h2>
    </div>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control relative">
     <div className='absolute top-5 left-3 text-[14px] text-[#9CA3AF]'><FaSearch /></div>
      <input type="text" placeholder="Search" className="input pl-8 text-[#9CA3AF] text-[14px] font-[500] bg-[#F7F7FD] border-none input-bordered w-[286px] h-[48px] md:w-auto" />
    </div>
    <div className="dropdown dropdown-end flex items-center gap-2 ml-11">
  <span className='text-[#4E4E4E] text-3xl'><MdOutlineEmail /> </span>  
    <span className='text-[#4E4E4E] text-3xl'><MdOutlineNotifications /></span>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">

        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
     
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;