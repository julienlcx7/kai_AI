import React from 'react';
import './Datacenter.css';  // Ensure you have corresponding CSS for styling

const Datacenter =({name_server,loc_server}) => {
  return (
    <div className='Datacenter'>
     <h1>{name_server}</h1>
     <p>{loc_server}</p>
    </div>
  );
}

export default Datacenter;