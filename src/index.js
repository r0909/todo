import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Model from './Model'
let model = new Model()
function render(){
    ReactDOM.render(<App model={model}/>, document.getElementById('root'));
}
model.subscribe(render)
render()