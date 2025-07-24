import React, { useState } from 'react';
import './Dropdown.css';
import 'iconify-icon';

function Dropdown({ title, content }) {
    // State to control the visibility of the dropdown content
    const [visible, setVisible] = useState(false);

    // Function to toggle the visibility of the dropdown content
    const toggleVisibility = () => {
        setVisible(!visible);
    };

    return (
        <div className="dropdown">
            <button className={`dropdown-btn ${visible ? 'rotate-up' : ''}`} onClick={toggleVisibility}>
                <h2>{title}</h2>
                <iconify-icon icon="eva:arrow-down-fill" />
            </button>
            {/* Show the dropdown content only if visible is true */}
            {visible && (
                <ul className="dropdown-content">
                    {content}
                </ul>
            )}
        </div>
    );
}

export default Dropdown;