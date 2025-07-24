import React from 'react';
import './Pods_bar.css';  // Ensure you have corresponding CSS for styling
import 'iconify-icon';

const Pods_bar =() => {
  return (
    <div className='Pods_bar'>
     <p className='etiquette'>GPU</p>
     <div className='bar_2'>
      <div>
        <iconify-icon icon={"material-symbols:cloud"}/>
      <p>Secure Cloud</p>
      </div>
      <div>
      <iconify-icon icon={"mdi:server"}/>
      <p>Network Volume</p>
      </div>
      <div>
      <iconify-icon icon={"mdi:world"}/>
      <p>Any</p>
      </div>
      </div>
    </div>
  );
}

export default Pods_bar;