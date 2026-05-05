import React,{useState,useEffect,useMemo} from "react";
import ReactDOM from "react-dom/client";

function App(){

    const [count , setcount] = useState(0);
    const [numbers , setnumber] = useState(null);
    const [result , setResult] = useState("");

    function Fibo(number){
        if(number<=1)
        return numbers;
        else
        return Fibo(number-2)+Fibo(number-1);
    }

   useEffect(()=>{
    setResult(Fibo(numbers))
    },[numbers]);

    // counter
    return(
    <>
       <h1 >Count is: {count}</h1>
       <button onClick={()=>setcount(count+1)}>Increment</button>
       <button onClick={()=>setcount(count-1)}>Decrement</button>

       <div>
          <h2>Fibbonacci number is:{result}</h2>
          <input type="number" value={numbers} onChange={(e)=>setnumber(e.target.value)}></input>
       </div>

    </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);