import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// Actual DOM code
const root1 = document.getElementById("root1");

// Virtual DOM code
const root2 = ReactDOM.createRoot(document.getElementById("root2"));

setInterval(()=> {
  root1.innerHTML = `
<div>
  <h1>Hello JS!</h1>
  <input />
  <pre>${new Date().toLocaleTimeString()}</pre>
</div>
`;

root2.render(
<div>
  <h1>Hello ReactJS!</h1>
  <input />
  <pre>{new Date().toLocaleTimeString()}</pre>
</div>
);
}, 1000);


