import React, { useState } from 'react';
import './Side_add.css';
import Input_form from '../Input_form/Input_form';
import DropdownWithCheckboxes from '../DropdownWithCheckboxes/DropdownWithCheckboxes';
import 'iconify-icon';
import { useDispatch } from 'react-redux';
import { create_model } from '../../actions/create_model.action';

const Side_add = ({ watch, setWatch,token }) => {
  const dispatch = useDispatch();

  // Local state to store form inputs
  const [tenant, setTenant] = useState('');
  const [modelName, setModelName] = useState('');
  const [modelType, setModelType] = useState([]); // For storing multiple types

  // Function to remove the 'active' class
  const handleRemoveActiveClass = () => {
    setWatch(''); // Remove the active class
  };

  // Function to handle form submission
  const handleSaveTemplate = () => {
    const token = token; // Replace with the actual token

    if (tenant && modelName && modelType.length > 0) {
      // Dispatch create_model action with the input values
      dispatch(create_model(token, tenant, modelName, modelType.join(','))) // Pass selected options as a string
        .then(() => {
          handleRemoveActiveClass();
        })
        .catch(error => {
          console.error('Failed to create model:', error);
        });
    } else {
      console.error('All fields are required');
    }
  };

  return (
    <div className={watch}>
      <div className='Side_add_title'>
        <button onClick={handleRemoveActiveClass} className="remove-active-button">
          <iconify-icon icon="fe:arrow-left" />
        </button>
        <p>Add a New Template</p>
      </div>
      <div className='Side_add_input'>
        {/* Input for tenant */}
        <Input_form
          input_name={"tenants"}
          label_name={"Tenants"}
          value={tenant}
          onChange={(e) => setTenant(e.target.value)} // Update tenant state
        />

        {/* Input for model name */}
        <Input_form
          input_name={"name_machine"}
          label_name={"Nom de la machine"}
          value={modelName}
          onChange={(e) => setModelName(e.target.value)} // Update modelName state
        />

        {/* Dropdown for model type */}
        <DropdownWithCheckboxes
          selectedOptions={modelType}
          onChange={setModelType} // Update modelType state
        />

        <div>
          <button onClick={handleSaveTemplate} className='btn_save_template'>
            Save Template
          </button>
        </div>
      </div>
    </div>
  );
};

export default Side_add;
