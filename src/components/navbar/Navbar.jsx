import React, { useEffect, useState } from 'react'
import './navbar.scss'
import { SiAdidas } from "react-icons/si";
import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { useSelector } from 'react-redux';
import Cart from '../cart/cart';



export default function Navbar() {
    let cart = useSelector((state) => state.cart.cart)
    let [numberOfItems, setnumberOfItems] = useState(0)
    useEffect(() => {
        let totalQuantity = 0;
        for (const item of cart) {
            totalQuantity += item.quantity;
        }
        setnumberOfItems(totalQuantity);
    }, [cart]);
    console.log(cart);
    return (
        <div className='Navbar_'>
            <div className='d-flex container justify-content-between'>
                <input className='search' placeholder='search' type="text" name="" id="" />
                <SiAdidas size={50} />
                <div className='w- d-flex justify-content-between'>



                    <div class="dropdown ">
                        <button class=" d-flex justify-content-center align-items-center  btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <FaCartArrowDown />
                            <h5>cart</h5>
                            <div className='cartnum'>{numberOfItems}</div>
                        </button>
                        <ul class="dropdown-menu">
                            <Cart/>
                        </ul>
                    </div>



                    <div className='d-flex align-items-center'>
                        <FaHeart />
                        <h5>wishlist</h5>
                    </div>
                    <div className='d-flex align-items-center'>
                        <IoMdPerson />
                        <h5>login </h5>
                    </div>
                </div>



            </div>
        </div>
    )
}
