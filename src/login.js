import React from "react";
import {Form} from "./Text_box";
import {appStyle} from "./style";

const login = () => {
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


export default login;