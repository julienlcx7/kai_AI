import React from 'react';
import './Account_info.css';  // Ensure you have corresponding CSS for styling
import Dropdown from '../Dropdown/Dropdown';
const Account_info =() => {
  return (
      <div className='info'>
        <h1>Account Info</h1>
        <div className='details'>
          <div>
            <p>Email: julien.lcx@gmail.com</p>
            <p>Name:</p>
            <p>Address Line 1:</p>
            <p>Address Line 2:</p>
            <p>Country Code:</p>
          </div>
          <div>
            <p>Compagny Name:</p>
            <p>Compagny ID:</p>
            <p>Tax ID:</p>
          </div>
        </div>
      </div>
  );
}

export default Account_info;