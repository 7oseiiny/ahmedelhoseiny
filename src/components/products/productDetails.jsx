import React, { useState } from 'react';
import './style.scss';
import { FaStar } from 'react-icons/fa';
import Rate from './rate';
import Size from './Size';
import Color from './color';
import { useDispatch } from 'react-redux';
import { addtocart } from '../../servces/cart';

export default function ProductDetails({ prod }) {
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    let dispatch = useDispatch()

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const addToCart = () => {
        console.log('Selected Size:', selectedSize);
        console.log('Selected Color:', selectedColor);
        console.log('Quantity:', quantity);
        dispatch(addtocart({
            selectedSize,
            selectedColor,
            quantity,
            prod
        }));

    };

    return (
        <div className='productDetails d-flex container w-75 '>
            <div className='col-4 '>
                <img src={prod.image} className='imageprod' alt="" />
            </div>
            <div className='col-2'></div>
            <div className='col-6 p-2'>
                <h5>{prod.title}</h5>

                <div className='d-flex align-items-center my-3'>
                    <Rate />
                    <h4 className='mx-4'>4.9 of 5</h4>
                    <p>22 rate</p>
                </div>
                <div className='d-flex align-content-end price'>
                    <h4>{prod.price} </h4>
                    <p>L.E</p>
                </div>
                <h4>size</h4>
                <div className='d-flex '>
                    <Size size={"s"} onClick={() => setSelectedSize('s')} />
                    <Size size={"m"} onClick={() => setSelectedSize('m')} />
                    <Size size={"l"} onClick={() => setSelectedSize('l')} />
                    <Size size={"xl"} onClick={() => setSelectedSize('xl')} />
                    <Size size={"xxl"} onClick={() => setSelectedSize('xxl')} />
                </div>
                <h4>color</h4>
                <div className='d-flex '>
                    <Color color={"red"} onClick={() => setSelectedColor('red')} />
                    <Color color={"green"} onClick={() => setSelectedColor('green')} />
                    <Color color={"blue"} onClick={() => setSelectedColor('blue')} />
                </div>
                <h4>quantity</h4>
                <div className='quantity d-flex  align-middle align-items-center'>
                    <button onClick={decrementQuantity}>-</button>
                    <p className='mx-3'>{quantity}</p>
                    <button onClick={incrementQuantity}>+</button>
                </div>

                <button className='addtocart' onClick={addToCart}>add to cart</button>
            </div>

        </div>

    );
}
