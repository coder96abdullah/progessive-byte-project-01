import React from 'react';
import Sidebar from '../SideBar/Sidebar';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='flex' >
            <div className='w-[15%] bg-black h-auto'>
            <Sidebar></Sidebar>
            </div>
            <div className='w-[85%] bg-gray-200'>
             <Navbar></Navbar>
             <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;