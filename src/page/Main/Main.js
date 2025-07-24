import React, { useEffect } from 'react';
import './Main.css';  // Vos styles
import Footer from '../../component/Footer/Footer';
import Lock_Content from '../../component/Lock_Content/Lock_Content';
import logo from '../../img/hosteur-aiflow-01 1.png';
import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from 'react-router-dom';
import logo_navbar from '../../img/logo_AIflow.svg';

function Main() {
  const { keycloak } = useKeycloak();
  const navigate = useNavigate();

  // Dès que keycloak.authenticated passe à true, on redirige une fois vers /Dashboard
  useEffect(() => {
    if (keycloak.authenticated) {
      navigate('/Dashboard', { replace: true });
    }
  }, [keycloak.authenticated, navigate]);

  return (
    <main className='lock_screen'>
      <div className='nav_lock'>
        <img src={logo_navbar} alt="Logo AiFlow" />
        <div>
          {!keycloak.authenticated && (
            <button
              type="button"
              className="btn_log"
              onClick={() => keycloak.login()}
            >
              Login
            </button>
          )}
          <button
            className='btn_start'
            onClick={() =>
              window.open(
                "https://login.hosteur.com/realms/HosteurPublic/login-actions/registration?client_id=account-console&tab_id=IzAFPOLqiRk",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Sign up
          </button>
        </div>
      </div>

      {/* Si non authentifié, on affiche toujours l’écran de verrouillage */}
      {!keycloak.authenticated && (
        <Lock_Content
          title="Let’s start with Hosteur AiFlow"
          //logo={logo}
          subtitle="Develop, train, and scale AI models with AiFlow."
        />
      )}

      {/* Optionnel : votre footer */}
      <Footer />
    </main>
  );
}

export default Main;
