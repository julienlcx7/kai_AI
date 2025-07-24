import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ReactKeycloakProvider, useKeycloak } from '@react-keycloak/web';
import { useDispatch } from 'react-redux';

import './App.css';
import HomePage from './page/Main/Main';
import Dashboard from './page/Dashboard/Dashboard';
import Explore from './page/Explore/Explore';
import Kubeflow from './page/Kubeflow/Kubeflow';
import Storage from './page/Storage/Storage';
import InstanceTable from './page/InstanceTable/InstanceTable';
import Jupyter from './page/Jupyter/Jupyter';
import Settings from './page/Settings/Settings';
import Page404 from './page/404/404';
import keycloakClient from './keycloak';
import { SET_TOKEN, SET_AUTH } from './reducers/token.reducer';
import { SET_USERNAME } from './reducers/user.reducer';

// Debug panel to display Keycloak events and token info
function DebugPanel({ events, tokens }) {
  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0,
      background: 'rgba(255,255,255,0.9)', color: '#000',
      fontSize: '12px', maxHeight: '150px', overflowY: 'auto',
      width: '100%', zIndex: 9999, borderTop: '1px solid #ddd',
      padding: '8px'
    }}>
      <strong>KC Events:</strong>
      <pre style={{ margin: '4px 0' }}>
        {events.map((e, i) => `${i+1}. ${e.event}${e.error ? ` → ${e.error}` : ''}`).join('\n') || '– aucune –'}
      </pre>
      <strong>KC Tokens:</strong>
      <pre style={{ margin: '4px 0', wordBreak: 'break-all' }}>
        {tokens ?
          `access_token: ${tokens.token}\nrefresh_token: ${tokens.refreshToken}` :
          '– aucun –'}
      </pre>
    </div>
  );
}

const App = () => {
  const dispatch = useDispatch();
  const [kcEvents, setKcEvents] = useState([]);
  const [kcTokens, setKcTokens] = useState(null);

  // Capture Keycloak events
  const eventLogger = (event, error) => {
    setKcEvents(prev => [...prev, { event, error }]);
    console.log('Keycloak event:', event, error);
  };

  // Capture and dispatch tokens
  const tokenLogger = (tokens) => {
    setKcTokens(tokens);
    dispatch({ type: SET_TOKEN, payload: tokens.token });
    dispatch({ type: SET_AUTH, payload: tokens.authenticated });
    if (tokens.tokenParsed) {
      dispatch({ type: SET_USERNAME, payload: tokens.tokenParsed.name });
    }
    localStorage.setItem('isLoggedIn', tokens.authenticated);
    // Persist the raw JWT for later API calls
    if (tokens.token) {
      localStorage.setItem('jwtToken', tokens.token);
    }
    console.log('Keycloak tokens:', tokens);
  };

  return (
    <ReactKeycloakProvider
      authClient={keycloakClient}
      initOptions={{
        onLoad: 'login-required',    // force login and handle callback
        pkceMethod: 'S256',          // Authorization Code Flow + PKCE
        checkLoginIframe: false,     // disable iframe polling
        redirectUri: window.location.origin + '/dashboard',
        responseMode: 'query',       // use query string for code & state
        enableLogging: true          // debug logs
      }}
      onTokens={tokenLogger}
      onEvent={eventLogger}
      LoadingComponent={<div>Initializing authentication...</div>}
    >
      {/* Debug panel shows events & tokens in-app */}
      <DebugPanel events={kcEvents} tokens={kcTokens} />

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Protected routes */}
          <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
          <Route path="/explore" element={<RequireAuth><Explore /></RequireAuth>} />
          <Route path="/kubeflow" element={<RequireAuth><Kubeflow /></RequireAuth>} />
          <Route path="/storage" element={<RequireAuth><Storage /></RequireAuth>} />
          <Route path="/instancetable" element={<RequireAuth><InstanceTable /></RequireAuth>} />
          <Route path="/jupyter" element={<RequireAuth><Jupyter /></RequireAuth>} />
          <Route path="/settings" element={<RequireAuth><Settings /></RequireAuth>} />

          {/* Fallback 404 */}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </ReactKeycloakProvider>
  );
};

// Protect routes by redirecting unauthenticated users to login
function RequireAuth({ children }) {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    return <div>Loading authentication du Z...</div>;
  }

  if (!keycloak.authenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default App;
