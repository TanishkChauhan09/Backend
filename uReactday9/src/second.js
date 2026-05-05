import React,{useState,useEffect,useMemo, useReducer, useInsertionEffect, useRef} from "react";
import ReactDOM from "react-dom/client";

function Appp(){

    const [count , setCount] = useState(0);

    // let money = 0; // normal variable but to hold the previous value we can make it as a reference so that previous value remains same
       let money = useRef(0);
    //    console.log(money.current);

    return(
        <> 
          <h1>Count is: {count}</h1>
          <button onClick={()=>{setCount(count+1)}}>Increment</button>

          <h1>Money is:{money.current}</h1>
          <button onClick={()=>{
            money.current = money.current+1;
            console.log(money.current);
          }}>Increment</button>
        
        </>
    )

}


ReactDOM.createRoot(document.getElementById('root')).render(<Appp/>);