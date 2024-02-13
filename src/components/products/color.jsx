import React from 'react';
import './style.scss';

export default function Color({ color, onClick, selected }) {
    return (
        <div className={`color ${selected ? 'selected' : ''}`} style={{ backgroundColor: color }} onClick={onClick}></div>
    );
}
