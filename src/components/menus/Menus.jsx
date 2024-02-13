import React from 'react'
import './menus.scss'
import { NavLink } from 'react-router-dom'
export default function Menus() {
    return (
        <div className='menus_'>
            <div className='container d-flex justify-content-between'>
                <NavLink to="/home" exact activeClassName="active">Home</NavLink>
                <NavLink to="/Mens" activeClassName="active">Kids</NavLink>
                <NavLink to="/Offer" activeClassName="active">Offer</NavLink>
                <NavLink to="/Mens" activeClassName="active">Mens</NavLink>
                <NavLink to="/Kids" activeClassName="active">Kids</NavLink>
                <NavLink to="/products" activeClassName="active">products</NavLink>

            </div>
        </div>
    )
}
