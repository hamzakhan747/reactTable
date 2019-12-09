import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './App';
import {Provider} from './store'


ReactDOM.render(
<Provider>
<Main/>
</Provider>
,

document.getElementById('root'));


