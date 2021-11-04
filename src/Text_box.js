import React from 'react';
import {formStyle, labelStyle, inputStyle, submitStyle} from "./style.js";

const Field = React.forwardRef(({label, type}, ref) => {
    return (
        <div>
            <label style={labelStyle} >{label}</label>
            <input ref={ref} type={type} style={inputStyle} />
        </div>
    );
});

const Form = ({onSubmit}) => {
    const usernameRef = React.useRef();
    const passwordRef = React.useRef();
    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        };
        onSubmit(data);
    };
    return (
        <form style={formStyle} onSubmit={handleSubmit} >
            <Field ref={usernameRef} label="Username:" type="text" />
            <Field ref={passwordRef} label="Password:" type="password" />
              <div>
              <button style={submitStyle} type="submit">Submit</button>
                </div>  
        </form>
    );
};

export  {Form}