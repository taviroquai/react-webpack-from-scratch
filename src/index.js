import React from 'react'
import ReactDOM from 'react-dom';
import img from './ferrari.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.less';

const App = function () {
    return (
        <div>
            <p>Hello World!</p>
            <img src={img} alt="Ferrari" />
        </div>
    )
    
}

const el = document.getElementById("root");
ReactDOM.render(<App />, el);