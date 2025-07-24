import React from 'react';
import './Machine_Pods.css';  // Ensure you have corresponding CSS for styling

const Machine_Pods =({logo_modele,title,id,name_image}) => {
  return (
    <div className='info'>
      <div className='info_machine'>
      <img src={logo_modele}></img>
      <div className='carac'>
      <h2>{title}</h2>
      <p>ID:{id}</p>
      <p>{name_image}</p>
      </div>
      </div>
      
    </div>
  );
}

export default Machine_Pods;