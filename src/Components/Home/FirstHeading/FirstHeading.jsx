import React from 'react';
import { RiBarChartFill } from "react-icons/ri";
import { TbFileInvoice } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { MdOutlineInventory2 } from "react-icons/md";
const FirstHeading = () => {
    return (
        <div className='my-10'>
        <div className=' grid grid-cols-4 gap-4'>

            <div className='flex bg-white rounded-2xl py-8 pl-4 pr-10 gap-5'>
          <div className='bg-[#EDEDFC] text-[#4F46E5] border rounded-full p-5 text-[25px] inline-block'><RiBarChartFill /></div>
            <div className='flex flex-col'>
            <p className='text-[14px] text-[#2B3674] font-[600]'>Total Bills</p>
            <p className='text-[24px] font-[700] text-[#2B3674]'>$108746</p>
            </div>
            </div>

            <div className='flex bg-white rounded-2xl py-8 pl-4 pr-10 gap-5'>
          <div className='bg-[#EDEDFC] text-[#4F46E5] border text-[25px] rounded-full p-5 inline-block'><TbFileInvoice /></div>
            <div className='flex flex-col'>
            <p className='text-[14px] text-[#2B3674] font-[600]'>Total Invoice</p>
            <p className='text-[24px] font-[700] text-[#2B3674]'>7000</p>
            </div>
            </div>

            <div className='flex bg-white rounded-2xl py-8 pl-4 pr-10 gap-5'>
          <div className='bg-[#EDEDFC] text-[#4F46E5] border rounded-full p-5 text-[25px] inline-block'><GoPeople /></div>
            <div className='flex flex-col'>
            <p className='text-[14px] text-[#2B3674] font-[600]'>Total Customers</p>
            <p className='text-[24px] font-[700] text-[#2B3674]'>$5490</p>
            </div>
            </div>

            <div className='flex bg-white rounded-2xl py-8 pl-4 pr-10 gap-5'>
          <div className='bg-[#EDEDFC] text-[#4F46E5] border rounded-full p-5 inline-block text-[25px]'><MdOutlineInventory2 /></div>
            <div className='flex flex-col'>
            <p className='text-[14px] text-[#2B3674] font-[600]'>Total Vendors</p>
            <p className='text-[24px] font-[700] text-[#2B3674]'>578</p>
            </div>
            </div>
            
        </div>
        </div>
    );
};

export default FirstHeading;