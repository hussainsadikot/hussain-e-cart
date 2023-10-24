import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import store from './redux/store';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Provider store = {store}>
    <Auth0Provider
    domain="dev-lj83r0lon7ythmc4.eu.auth0.com"
    clientId="kO6swqTcM3NZbc4QunqAI0lfo73W167I"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    </Auth0Provider>  
    </Provider>
  
);
