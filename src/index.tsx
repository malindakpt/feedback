import React from 'react';
import { createRoot } from 'react-dom/client';  
import { Provider } from 'react-redux';  
import { store } from './components/login/store'; 
import App from './app';  

// Get the root DOM element
const container = document.getElementById('root');
const root = createRoot(container!);  

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
