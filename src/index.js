import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// window.LIB_FOLDER = process.env.APP_LIB_FOLDER;

// const rootElement  = document.getElementById('root');
// const root = createRoot(rootElement);  
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
