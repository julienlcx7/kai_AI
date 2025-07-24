import React from 'react';
import './Pods_price.css';  // Ensure you have corresponding CSS for styling

const Pods_price =({carte_name,price,description}) => {
  return (
    <div className='Pods_price'>
      <h1>{carte_name}</h1>
        <p>{price}</p>
        <p className='grey'>{description}</p>
    </div>
  );
}

export default Pods_price;