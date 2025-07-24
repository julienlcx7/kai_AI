import React, { useState } from 'react';
import "./DropdownWithCheckboxes.css"

const DropdownWithCheckboxes = ({ selectedOptions, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { id: 1, label: 'Tensorflow' },
    { id: 2, label: 'PyTorch' },
    { id: 3, label: 'Scikit-learn' },
    { id: 4, label: 'XGBoost' },
    { id: 5, label: 'PMML' },
    { id: 6, label: 'Spark MLlib' },
    { id: 7, label: 'LightGBM' },
    { id: 8, label: 'Paddle' },
    { id: 9, label: 'MLFlow' },
    { id: 10, label: 'ONNX' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (optionId) => {
    const newSelectedOptions = selectedOptions.includes(optionId)
      ? selectedOptions.filter((id) => id !== optionId)
      : [...selectedOptions, optionId];
    onChange(newSelectedOptions); // Call the parent's onChange
  };

  return (
    <div className="dropdown-container">
        <p>Type de machine</p>
      <button className="dropdown-button" onClick={toggleDropdown}>
        Sélectionnez le type de machine
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option) => (
            <label key={option.id}>
              <input
                type="checkbox"
                checked={selectedOptions.includes(option.id)}
                onChange={() => handleCheckboxChange(option.id)}
              />
              {option.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownWithCheckboxes;
