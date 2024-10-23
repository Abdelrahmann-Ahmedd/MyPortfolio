import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import "./Layout.css";


function Layout() {
    return (
        <div className='layout bg-dark'>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout
