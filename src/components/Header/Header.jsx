import React from 'react'
import './header.scss'
import { FaPhoneVolume } from 'react-icons/fa'
export default function Header() {
    return (
        <div className='header_ '>
            <div className='container d-flex justify-content-between'>
                <h5>yashtary</h5>
                <p> Lorem ipsum dolor sit amet </p>
                <div className='d-flex justify-content-between' style={{ width: "300px" }}>
                    <div className='d-flex align-items-center'>
                        <FaPhoneVolume />

                        <h6>contact us </h6>

                    </div>
                    <div className='d-flex align-items-center'>
                        <FaPhoneVolume />

                        <h6>track order</h6>

                    </div>
                    <div className='d-flex align-items-center'>
                        <FaPhoneVolume />

                        <h6>find  store </h6>

                    </div>
                </div>

            </div>
        </div>
    )
}
