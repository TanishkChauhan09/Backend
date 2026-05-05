import React from "react";
import ReactDOM from "react-dom/client";

const element = <h1>Hello kaise ho</h1>;

function Greet(){
    return <h2>This is function based react componenet</h2>
}

// const element2 = greet();
// const element = <greet/>(function call)    JSX ke iss function call ke format ke liye function name ka starting wala letter should be capital
const element2   = <Greet/>;

const Reactroot = ReactDOM.createRoot(document.getElementById('root'));

Reactroot.render(element2);