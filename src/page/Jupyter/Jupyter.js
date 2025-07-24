import React from 'react';
import './Jupyter.css'
import Navbar from '../../component/Navbar/Navbar';
import Content from '../../component/Content/Content';
import jupyter_logo from '../../img/jupyter.png'
import { useNavigate } from 'react-router-dom';
const Jupyter = () => {
  const navigate = useNavigate()
  return (
    <main>
    <div className='Content'>
    <div className='element'>
      <div className='service_page'>
      <div className='txt_404'>
        <p>Start customize<br/>
        <b>Instance</b></p>
        <button onClick={() => navigate("/dashboard")}>Go jupyter</button>
      </div>
    <img src={jupyter_logo} className='logo_services'></img>
    </div>
      </div>
    </div>

  </main>
  );
};

export default Jupyter;
