import React,{useState} from "react";  // useState is a hook here, which is coming by export only that's why i am using brackets for this
import ReactDOM from "react-dom/client";



function Counter(){
    
    let [count , setCount] = useState(0);

    function incrementno(){
        count = count+1;
        setCount(count);
        // console.log("count is:",count);
        // document.querySelector('h1').innerHTML=`Count is:${count}`; // it's not a good habit
    }

    function decrementno(){
        count = count-1;
        setCount(count);
        // console.log("count is:",count);
        // document.querySelector('h1').innerHTML=`Count is:${count}`;
    }

    return(
        <div className="first1" id="sec">

            <h1>Count is:{count}</h1>

            <button className="b1" onClick={incrementno}>Increment by {count}</button>

            <button className="b1" onClick={decrementno}>Decrement by {count}</button>
       
        </div>
    )
}


const Reactroot = ReactDOM.createRoot(document.getElementById('root'));

Reactroot.render(<Counter/>); 