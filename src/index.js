import React from 'react';
import ReactDOM from 'react-dom';
import {appStyle} from "./style.js";
import {Form} from "./Text_box";



const App = () => {
    const handleSubmit = data => {
        const json = JSON.stringify(data, null, 4);
        console.clear();
        console.log(json);
    };
    return (
        <div style={appStyle}>
            <Form onSubmit={handleSubmit} />
        </div>
    );
};

const root = document.querySelector('#root');
ReactDOM.render(<App />, root );