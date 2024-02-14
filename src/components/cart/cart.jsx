import React from 'react'
import { useSelector } from 'react-redux'
import Color from './../products/color';

export default function Cart() {
    let cart = useSelector(state => state.cart.cart)
    console.log(cart);
    return (
        <div className=' ' style={{ width: "400px" }}>
            {cart.map(item => (
                <div className='d-flex m-1 justify-content-between p-3' style={{ background: "lightgray", borderRadius: "10px" }}>
                    <img width={"100px"} src={item.prod.image} alt="" />
                    <div >
                        <div className='d-flex m-1'>
                            <p>size :</p>
                            <h5 className='mx-2'>{item.selectedSize}</h5>
                        </div>

                        <div className='d-flex m-1 align-content-center align-items-center'>
                            <p>Color :</p>
                            <Color color={item.selectedColor} onClick={() => { }} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
