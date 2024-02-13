import React from 'react'
import { useSelector } from 'react-redux'
import Color from './../products/color';

export default function Cart() {
    let cart = useSelector(state => state.cart.cart)
    console.log(cart);
    return (
        <div className=' '>
            {cart.map(item => (
                <div className='d-flex m-1 '>
                    <img width={"50px"} src={item.prod.image} alt="" />
                    <div>
                        <div className='d-flex m-1'>
                            <p>size :</p>
                            <h5 className='mx-2'>{item.selectedSize}</h5>
                        </div>

                        <div className='d-flex m-1'>
                            <p>Color :</p>
                            <Color color={item.selectedColor} onClick={() => { }} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
