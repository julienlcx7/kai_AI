import React from 'react';
import './404.css';  // Optional: include if you have specific styles for this component
import Navbar from '../../component/Navbar/Navbar';
import Content from '../../component/Content/Content';
import avatar from '../../img/robot.svg'
import { useNavigate } from 'react-router-dom';
import logo from '../../img/logo.png'

function Page_404() {
  const navigate = useNavigate()
  return (
    <main>
      <div className='Content'>
      <div className='element'>
      <img src={logo}></img>
        <div className='error_page'>
        <div className='txt_404'>
          <h1>404</h1>
          <p>Something went<br/>
          <b>WRONG!</b></p>
          <button onClick={() => navigate("/Dashboard")}>Back to Home</button>
        </div>
      <img src={avatar} className='avatar_404'></img>
      </div>
        </div>
      </div>
    </main>
  );
}

export default Page_404;