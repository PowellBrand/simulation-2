import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import { HashRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>
    , document.getElementById('root'));
registerServiceWorker();
