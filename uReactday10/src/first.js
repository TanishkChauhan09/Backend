import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Second from "./second";

function App(){
  
    const [count , setCount] = useState(0);

    return(
        <>
        <h1>Hello aapko</h1>
        <Second/>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);