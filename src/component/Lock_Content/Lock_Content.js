import React , { useEffect }from 'react';
import './Lock_Content.css'; // Ensure you have corresponding CSS for styling
import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from 'react-router-dom'; // Import navigate hook
import '@fontsource/inter/400.css'; // Regular weight
import '@fontsource/inter/700.css'; // Bold weight

const Lock_Content = ({ title, logo, subtitle }) => {
  const { keycloak } = useKeycloak();
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    if (keycloak.authenticated) {
      // Faites correspondre exactement la casse de votre route définie dans App.js
      navigate('/dashboard', { replace: true });
    }
  }, [keycloak.authenticated, navigate]);
  return (
    <div className='lock'>
      <img src={logo} alt="logo" />
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <div className='btn_home'>
        {!keycloak.authenticated && (
          <button
            type="button"
            className="btn_start"
            onClick={() => keycloak.login()}
          >
            Start with AiFlow
          </button>
        )}
        <button onClick={() => window.open("https://gitlab.mgnt-aiflow.hosteur.cloud/aiflow/documentation", "_blank", "noopener,noreferrer")}
         className='btn_docs'>
          Read the docss
        </button>
      </div>
    </div>
  );
}

export default Lock_Content;
