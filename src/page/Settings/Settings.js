import React from 'react';
import './Settings.css'
import Navbar from '../../component/Navbar/Navbar';
import Account_info from '../../component/Account_info/Account_info';
import Dropdown from '../../component/Dropdown/Dropdown';
const Settings = () => {
  return (
    <main>
    <div className='Content'>
     <Navbar Title={"Settings"}/>
     <div className='element_params'>
      <Account_info/>
      <Dropdown title={"Api Keys"} content={"addf23ffd342sf4f53csc53f1cv09slk84os2l3"}/>
      <Dropdown title={"Api Keys"} content={"addf23ffd342sf4f53csc53f1cv09slk84os2l3"}/>
      <Dropdown title={"Api Keys"} content={"addf23ffd342sf4f53csc53f1cv09slk84os2l3"}/>
      <Dropdown title={"Api Keys"} content={"addf23ffd342sf4f53csc53f1cv09slk84os2l3"}/>
     </div>
    </div>
  </main>
  );
};

export default Settings;
