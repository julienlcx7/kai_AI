import React, { useState } from 'react';
import './Storage.css';
import Navbar from '../../component/Navbar/Navbar';
import Content from '../../component/Content/Content';
import Datacenter from '../../component/Datacenter/Datacenter';
import Input_form from '../../component/Input_form/Input_form';

const Storage = () => {
  const [showContent, setShowContent] = useState(true);

  const handleButtonClick = () => {
    setShowContent(false);
  };

  return (
    <main>
      <div className='Content'>
        <Navbar Title={"Storage"} />
        {showContent ? (
          <Content 
            description={"You have not deployed any Storage."} 
            btn_txt={"New Storage"} 
            onButtonClick={handleButtonClick} 
          />
        ) : (
          <div className='element_storage'>
            <h1>Choose Datacenter</h1>
            <div className='grid_storage'>
              <Datacenter name_server={"Ragnarokk"} loc_server={"EU-FR"} />
              <Datacenter name_server={"Ragnarokk"} loc_server={"EU-FR"} />
              <Datacenter name_server={"Ragnarokk"} loc_server={"EU-FR"} />
              <Datacenter name_server={"Ragnarokk"} loc_server={"EU-FR"} />
              <Datacenter name_server={"Ragnarokk"} loc_server={"EU-FR"} />
              <Datacenter name_server={"Ragnarokk"} loc_server={"EU-FR"} />
            </div>
            <form>
              <div className='form'>
                <Input_form label_name={"Container Disk"} input_name={"GB"} />
                <Input_form label_name={"Volume Disk"} input_name={"GB"} />
              </div>
              <div className='form_sumbit'>
                <input type="submit" value="Deploy" />
                <button>Cancel</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </main>
  );
};

export default Storage;
