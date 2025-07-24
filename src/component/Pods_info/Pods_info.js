import React from 'react';
import './Pods_info.css';  // Ensure you have corresponding CSS for styling

const Pods_info =({title,one,value_one,two,value_two,three,value_three}) => {
  return (
    <div className='Pods_info'>
      <h1>{title}</h1>
        <p>{one} {value_one}</p>
        <p>{two} {value_two}</p>
        <p>{three} {value_three}</p>
    </div>
  );
}

export default Pods_info;