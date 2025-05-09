import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; 
import ButtonComponent from './eventex/ButtonComponent'; 
import Inputcomponent from './eventex/Inputcomponent'; 
import Counter from './eventex/Counter'; 
import FormComponent from './eventex/FormComponent'; 
import Parent from './eventex/Parent';
import Toggle from './eventex/Toggle'; 
import MyButton from './eventex/MyButton'; 
import Toolbar from './eventex/Toolbar'; 
import LandingPage from './eventex/LandingPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
