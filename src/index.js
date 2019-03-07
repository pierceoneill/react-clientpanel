import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Blanklayout from './components/layout/blanklayout.jsx';

import './assets/scss/style.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
