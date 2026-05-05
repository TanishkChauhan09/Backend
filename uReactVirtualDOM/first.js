import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Add from "./first2";

function App(){

    const [lang,setlang] = useState(["TS","JS","Java"]);

    function handleclick(){
        setlang(["C++",...lang])
    }

    return(
        <>
           <div style={{display:"flex" , justifyContent:"center",gap:"20px",marginTop:"50px"}}> 
             {
               lang.map((value)=><Add key={value} value={value}></Add>)
             }
           </div>
           
           <button onClick={handleclick}>Click to add language</button>

        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);