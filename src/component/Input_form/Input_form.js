import React from 'react';
import './Input_form.css';  // Ensure you have corresponding CSS for styling

const Input_form =({label_name,input_name,value,onChange,type}) => {
  return (
     <div className="Input_form">
    <label htmlFor={input_name}>{label_name}</label>
    <input
      id={input_name}
      name={input_name}
      value={value}
      onChange={onChange} // Ensure onChange updates the parent state
      type={type}
    />
  </div>
  );
}

export default Input_form;