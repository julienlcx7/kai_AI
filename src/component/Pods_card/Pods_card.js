import React from 'react';
import './Pods_card.css';  // Ensure you have corresponding CSS for styling

const Pods_card =({carte_name,price,carac,carac2,gpu,level}) => {
  return (
    <div className='Pods_card'>
      <div className='carte_name'>
      <h1>{carte_name}</h1>
      </div>
      <div className='price'>
        <p>{price}</p>
        <p className='blue'>{price}</p>
      </div>
      <div className='carac grey'>
        <p>{carac}</p>
        <p>{carac2}</p>
      </div>
      <div className='gpu'>
        <p className='grey'>{gpu}</p>
        <p className='blue'>{level}</p>
      </div>
    </div>
  );
}

export default Pods_card;