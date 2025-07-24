import Keycloak from 'keycloak-js';

// Charger les valeurs depuis les variables d'environnement
const keycloak = new Keycloak({
  url: process.env.REACT_APP_OIDC_ISSUER || 'https://login.hosteur.com/',
  realm: process.env.REACT_APP_OIDC_REALM || 'HosteurLab',
  clientId: process.env.REACT_APP_OIDC_CLIENT_ID || 'kai-web',
});

// Helper to access the current JWT token from any module
export const getJwtToken = () => keycloak.token;

export default keycloak;
