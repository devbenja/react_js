import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css';
import { App } from './PropTypes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App name={"Benja"} profession={"Web Developer"} />
  </React.StrictMode>, 
)
