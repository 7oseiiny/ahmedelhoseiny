import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Menus from '../menus/Menus'

export default function Layout() {
    return (
        <div>
            <Header />
            <Navbar />
            <Menus />
            <Outlet />
        </div>
    )
}
