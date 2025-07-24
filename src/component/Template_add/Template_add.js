import React from 'react';
import './Template_add.css';  // Ensure you have corresponding CSS for styling
import 'iconify-icon';
const Template_add =({title,onButtonClick}) => {
  return (
    <div className='infos'>
      <button onClick={onButtonClick}>
      <div className='info_template'>
      <iconify-icon icon={"mingcute:add-fill"}/> 
      <div className='caracteristique'>
      <h2>{title}</h2>
      </div>
      </div>
      </button>
    </div>
  );
}

export default Template_add;