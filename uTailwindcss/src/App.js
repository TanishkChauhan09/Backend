import React from "react";
import ReactDOM from "react-dom/client";

function App(){
    return(
        <>
          <h1 className="bg-red-500 mt-2 ml-3 rounded-xl font-bold border-10 border-green-500 my-3 rounded-b-4xl">Hello kaise ho</h1>
        </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);