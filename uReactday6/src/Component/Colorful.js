import {useState , useEffect} from "react";
import React from "react";

function Colorfull(props){

        console.log(props.name);    

        const [color , setColor] = useState("black");
        console.log('render');
    
        // document.body.style.backgroundColor = color;
        // useEffect(callback function , dependency) : when dependency changes only then this useEffect function will be executed
         

        // because of counter this function will run again and again and if not using useEffect our DOM will manipulate again and again even when color is not changing
        useEffect(()=>{
            console.log("useEffect Executed");
            document.body.style.backgroundColor = color;
        } , [color])
    
        console.log('render2');
    
    
        return(
            <>
            <h1>Background Color Changer</h1>
            <div className="button"> 
                <button className="bt" style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
                <button className="bt" style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
                <button className="bt" style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
                <button className="bt" style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
                <button className="bt" style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
                <button className="bt" style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
            </div>
            </>
        )


}

export default React.memo(Colorfull);