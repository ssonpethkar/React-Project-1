import React from 'react';
import ReactDOM from 'react-dom/client';

// import app js file
import App from './App';

// creating virtual DOM on id 
const root = ReactDOM.createRoot(document.getElementById('root'));

// rendering function in DOM
root.render(
  // strictmode is not mandatory but it is used for development.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

