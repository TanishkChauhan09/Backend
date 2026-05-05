import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function Passwordgenerator(){

    const [Password , setPassword] = useState("");
    const [length , setlength] = useState(9);
    const [numberchecked , setnumberchecked] = useState(false);
    const [characterchecked , setcharacterchecked] = useState(false);

    const generatepassword = useCallback(()=>{
        
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

        if(numberchecked)
            str+="0123456789";
        if(characterchecked)
            str+="!@#$%^&*()_+:{[}~";

        let pass ="";
        for(let i=0;i<length;i++)
            pass += str[Math.floor(Math.random()*str.length)];

        setPassword(pass);

    } , [length,numberchecked,characterchecked]);

    useEffect(()=>{
        generatepassword();
    // } , [length,numberchecked,characterchecked]) // This also is correct but for short i can also wite the below wali line ko
       } , [generatepassword]);

    return(
        <>
           <h1>{Password}</h1>
           <div className="second">
              <input type="range" min={5} max={50} value={length} onChange={(e)=>setlength(e.target.value)}></input>
              <label>Length is: ({length})</label>

              <input type="checkbox" defaultChecked={numberchecked} onChange={()=>setnumberchecked(!numberchecked)}></input>
              <label>Number</label>

              <input type="checkbox" defaultChecked={characterchecked} onChange={()=>setcharacterchecked(!characterchecked)}></input>
              <label>Character</label>

           </div>
        </>

    )

}

const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
Reactroot.render(<Passwordgenerator/>);