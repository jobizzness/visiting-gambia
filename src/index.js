import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import VGApp from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<VGApp />, document.getElementById('root'));
registerServiceWorker();
