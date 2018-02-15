import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pics from './Pics';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Pics />, document.getElementById('root'));
registerServiceWorker();
