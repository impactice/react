import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './chapter_03/Library';

const root= ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Library/>
  </React.StrictMode>
 );
 // Ifyouwanttostart measuringperformancein your app, passafunction
 // tologresults(for example: reportWebVitals(console.log))
 // orsendtoananalyticsendpoint. Learnmore: https://bit.ly/CRA-vitals
 reportWebVitals();