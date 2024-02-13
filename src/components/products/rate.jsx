import React from 'react'
import { FaStar } from 'react-icons/fa'

export default function Rate() {
    let color = "#FFB900"
    return (
        <div className='d-flex mx-3'>
            <FaStar color={color} />
            <FaStar color={color} />
            <FaStar color={color} />
            <FaStar color={color} />
            <FaStar color={"#ECEFF0"} />
        </div>
    )
}
