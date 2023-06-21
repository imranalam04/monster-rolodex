import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Hi :) I'm {this.state.name.firstName} {this.state.name.lastName} I
//   work at {this.state.company}
// </p>
// <button
//   onClick={() => {
//     this.setState( () => {
//       return{
//         name: { firstName: "Andrei", lastName: "Neagoie" },
//       } 
//     });
//     // console.log(this.state);
//   }}
// >
//   Click to change !
// </button>
// </header>