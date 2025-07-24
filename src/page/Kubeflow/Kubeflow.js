import React from 'react';
import './Kubeflow.css'
import Navbar from '../../component/Navbar/Navbar';
import Content from '../../component/Content/Content';
import Kubeflow_logo from '../../img/Kubeflow.png'
import { useNavigate } from 'react-router-dom';
const Kubeflow = () => {
  const navigate = useNavigate()
  return (
    <main>
    <div className='Content'>
    <div className='element'>
      <div className='service_page'>
      <div className='txt_404'>
        <p>Start customize<br/>
        <b>Instance</b></p>
        <button onClick={() => navigate("/dashboard")}>Go Kubeflow</button>
      </div>
    <img src={Kubeflow_logo} className='logo_services'></img>
    </div>
      </div>
    </div>

  </main>
  );
};

export default Kubeflow;
