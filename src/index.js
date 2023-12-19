//Importing necessary React and ReactDOM module
import React from "react";
import ReactDOM from "react-dom/client";
//Importing main application component and styling
import "./index.css";
import App from "./App";
//Importing the function to report web vitals
import reportWebVitals from "./reportWebVitals";
//Creating a root for React using ReactDOM.createRoot, targeting the element with the id 'root'
const root = ReactDOM.createRoot(document.getElementById("root"));
//Rendering the main application component within a StrictMode for additional checks during development
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
