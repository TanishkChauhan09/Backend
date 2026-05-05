import React from "react";
import ReactDOM from "react-dom/client";

// const newElement = <h1>Hello kaise ho</h1>;
//        babel                                       React                    render
// JSX code =>(convert by babel in) React.createElement =>React ke element(jsObject)=>HTML code

// const Reactroot = ReactDOM.createRoot(document.getElementById('root'));

// Reactroot.render(newElement);
// JSX : Javascript XML(jb html ka code js ke andar likhna ho)
// JSX is not the part of React


// const newElement = (
//                 <div>
//                     <h1>Hello kaise ho</h1>
//                     <h2>Aur btao kasie ho</h2>
//                 </div>  
//             );

const names = "Rohan";

// const obj = {backgroundColor:"Pink",color:"green",fontSize:"30px"}

// React Element
const newElement = (
    <>
        <h1 id="first" className="c1">Hello kaise ho</h1>
        <h2 id="second" style={{backgroundColor:"Pink",color:"green",fontSize:"30px"}}>Aur btao kasie ho {names}</h2>
    </>  
);

// React Component
// 1.) class based component

// 2.) function based component
function greet(){
    return <h1>Aur bhai kaisa hai</h1>
}
const elem2 = greet();

const meet = ()=>{
    return <h2>hello ji aur kya haal chaal</h2>
}

const elem3 = meet();

const elem4 = <>{elem2}{elem3}</>

const Reactroot = ReactDOM.createRoot(document.getElementById('root'));

// Reactroot.render(<>{greet()} {meet()}</>);

Reactroot.render(elem4);
