import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App.tsx";

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

