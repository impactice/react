import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ItemList from './ListNKey/ItemList'; 
import UserList from './ListNKey/UserList';
import NameForm from './ListNKey/NameForm';
import SimpleForm from './ListNKey/SimpleForm'; 
import RequestForm from './ListNKey/RequestForm'; 
import FruitSelect from './ListNKey/FruitSelect'; 
import Reservation from './ListNKey/Reservation'; 
import MultiInputForm from './ListNKey/MultiInputForm'; 
import AdvancedForm from './ListNKey/AdvancedForm'; 
import UncontrolledForm from './ListNKey/UncontrolledForm'; 
import SignUp from './ListNKey/SignUp'; 
import Parent from './ListNKey/Parent';
import TemperatureInput from './ListNKey/TemperatureInput'; 
import Calculator from './ListNKey/Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Parent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
