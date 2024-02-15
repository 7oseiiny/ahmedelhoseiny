import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Color from './../products/color';
import './cart.scss'
import { togglecartstate } from '../../servces/cart';
export default function Cart() {
    let dispatch = useDispatch()
    let cartstate = useSelector(state => state.cart.cartstate)
    function togglecart() { dispatch(togglecartstate()) }

    let cart = useSelector(state => state.cart.cart)
    console.log(cart);
    return (
        <div className='cart ' style={{ width: "400px", right: `${cartstate ? "-500px" : '0px'}` }}>
            <h4 onClick={togglecart} className='p-3 text-end'>X</h4>
            <h1 className='text-center' style={{ color: "#542E90" }}>My Cart</h1>
            <h3>cart sammary</h3>
            {
                cart.length ?

                    cart.map(item => (
                        <div className='d-flex m-1 justify-content-between p-3 border' style={{ borderRadius: "10px" }}>
                            <img style={{ borderRadius: "10px" }} className='border' width={"100px"} src={item.prod.image} alt="" />
                            <div >
                                <h6 className='m-2'>{item.prod.title}</h6>
                                <div className='d-flex m-1'>
                                    <h5>size :</h5>
                                    <h5 className='mx-2'>{item.selectedSize}</h5>
                                </div>

                                <div className='d-flex m-1 align-content-center align-items-center'>
                                    <h3>Color :</h3>
                                    <Color color={item.selectedColor} onClick={() => { }} />
                                </div>
                            </div>
                        </div>
                    ))
                    :
                    <div className='text-center mt-5'>
                        <p>cart is empty</p>
                    </div>
            }
        </div>
    )
}
