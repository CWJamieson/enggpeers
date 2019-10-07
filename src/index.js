import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import register from "./helpers/registerServiceWorker";

ReactDOM.render((<App />), document.getElementById('root'));
register();
