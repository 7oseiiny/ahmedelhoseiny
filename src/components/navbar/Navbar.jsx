import React, { useEffect, useState } from 'react'
import './navbar.scss'
import { SiAdidas } from "react-icons/si";
import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import Cart from '../cart/cart';
import { togglecartstate } from '../../servces/cart';



export default function Navbar() {
    let dispatch = useDispatch()
    let cart = useSelector((state) => state.cart.cart)
    let [numberOfItems, setnumberOfItems] = useState(0)
    let cartstate = useSelector(state => state.cart.cartstate)
    function togglecart() { dispatch(togglecartstate()) }

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



                    <div class="d-flex align-items-center" >
                        <div className='d-flex align-items-center notification' onClick={togglecart} style={{ backgroundColor: "transparent" }}  >
                            <FaCartArrowDown />
                            <h5 className='mx-2 ' style={{ color: "black" }}>cart</h5>
                            <div className='badge'>{numberOfItems}</div>
                        </div>
                        {<Cart />}
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
