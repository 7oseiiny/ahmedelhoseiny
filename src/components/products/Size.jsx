import React from 'react';
import './style.scss';

export default function Size({ size, onClick, selected }) {
    return (
        <div className={`size ${selected ? 'selected' : ''}`} onClick={onClick}>
            {size}
        </div>
    );
}
