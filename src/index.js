import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import App from './App';
import generateStore from './redux/store';
import reportWebVitals from './reportWebVitals';
import Auth0ProviderWithHistory from './services/Auth0ProviderHistory';

const store = generateStore();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Auth0ProviderWithHistory>
          <App />
        </Auth0ProviderWithHistory>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
