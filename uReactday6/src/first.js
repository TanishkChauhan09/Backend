import React,{useState , useEffect} from "react";
import ReactDOM from "react-dom/client";
import Colorfull from "./Component/Colorful";

function Main(){

   const [count,setcount] = useState(0);


   return(
      <>
         <div className="counter">

            <h1 >Count is:{count}</h1>
            <button onClick={()=>{setcount(count+1)}} style={{backgroundColor:"orchid" , borderradius:"50px" }}>Increment</button>
         
         </div>

           {/*This will also run again in rerendering when we click on increment to increase count*/}
           {/* if there is not any change in caaling the function again so it will not call this but if React.memo feels that there counld be any change in caaling this function then, this React.memo will handle that according to himself */}
           {/*  constant value is going in name again :-<Colorfull name="funny"></Colorfull> */} 
           
           <Colorfull name={count}></Colorfull>  {/*variable is going in name*/}
      </>
   )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main/>);