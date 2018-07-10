import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import VGApp from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from "react-redux";
import { store } from "./store.js";

ReactDOM.render(
    <Provider store="{store}">
        <VGApp />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
