import React from 'react';
import './Card.css';  // Ensure you have corresponding CSS for styling
import avatar from '../../img/nofind.png';

const Card = ({img,description}) => {
  return (
    <div className='Card_dashboard'>
      <div className='image-container'>
        <img src={img}></img>
        <div className='text_img'>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
