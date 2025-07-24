import React from 'react';
import './Template.css';  // Ensure you have corresponding CSS for styling

const Template =({logo_modele,title,id,name_image,onButtonClick}) => {
  return (
    <div className='infos'>
      <button onClick={onButtonClick}>
      <div className='info_template'>
      <img src={logo_modele}></img>
      <div className='caracteristique'>
      <h2>{title}</h2>
      <p>ID:{id}</p>
      <p>{name_image}</p>
      </div>
      </div>
      </button>
    </div>
  );
}

export default Template;