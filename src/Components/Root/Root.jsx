import React from 'react';
import Sidebar from '../SideBar/Sidebar';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='flex' >
            <div className='w-[20%] bg-black h-auto'>
            <Sidebar></Sidebar>
            </div>
            <div className='w-[80%] bg-gray-200'>
             <Navbar></Navbar>
             <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;