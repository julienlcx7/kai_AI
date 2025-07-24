import React from "react";
import 'iconify-icon';
import { useSelector } from 'react-redux';
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../img/logo.png"

import './Navbar.css';
import { Link } from "react-router-dom";
import { useKeycloak } from '@react-keycloak/web';
const Navbar = ({ Title, showButton,element,id_element}) => {
  const {keycloak} = useKeycloak()
  const nameUser = useSelector((state) => state.user.username); 
  return (
    <div className="navbar">
      <div className="logo-container">
        <Link to={"/dashboard"}>
          <img id="logo" src={logo}></img>
        </Link>
        <img id={id_element} src={element}></img>
      </div>
      <h1>{Title}</h1>
      <div className="bloc_3">
        <div>
          {showButton ? (
            <SearchBar/>
          ) : (
            <p className="amount">dd</p>
          )}
        </div>
        <div className="user_slidebar">
          <div className="user_text">
            <a href="/Settings">{nameUser}</a>
            <button className="logout" onClick={() => keycloak.logout({redirectUri: window.location.origin})}>
              <iconify-icon icon={"majesticons:logout"} className="icon-slidebar"/>   
          </button>
          </div>
          <div className="nav_docs">
              <Link to={process.env.REACT_APP_DOCS_URL || "https://gitlab.mgnt-aiflow.hosteur.cloud/aiflow/documentation"}>
                <p className="docs_text">See a docs</p>
                <iconify-icon icon={"material-symbols:docs"}/>
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
