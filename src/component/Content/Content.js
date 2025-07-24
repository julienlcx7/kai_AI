import React from 'react';
import './Content.css';  // Ensure you have corresponding CSS for styling
import avatar from '../../img/nofind.png';
import 'iconify-icon';


const Content = ({ description, btn_txt, onButtonClick }) => {
  return (
    <div className='element'>
      <img src={avatar} alt='Avatar' className='nofind' />
      <p>{description}</p>
      <button onClick={onButtonClick}>
        <iconify-icon icon="fluent:add-24-filled"></iconify-icon>
        {btn_txt}
      </button>
    </div>
  );
};

export default Content;
