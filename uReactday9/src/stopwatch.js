import React,{useState,useEffect,useMemo, useRef} from "react";
import ReactDOM from "react-dom/client";

function Stopwatch(){

    const [time,settime] = useState(0);
    const clrinterval = useRef(null);
    // const [isrunning , setisrunning] = useState(false);

    function start(){
        
        // if(!isrunning){
            if(clrinterval.current==null)
            {
            clrinterval.current = setInterval(()=>{
                settime((time)=>time+1);
                console.log(time);
            },1000)

        }

            // setisrunning(true);
        // }
    }

    function stop(){
        // if(isrunning)
        // {
            clearInterval(clrinterval.current);
            clrinterval.current = null;
            setisrunning(false);
        // }
    }

    function Reset(){
        clearInterval(clrinterval.current);
        clrinterval.current = null;
        settime(0);
    }


    return(
        <>
        <div id="stop">
          <h1>StopWatch is:{time}</h1>
          <button className="but" onClick={start}>Start</button>
          <button className="but" onClick={stop}>Stop</button>
          <button className="but" onClick={Reset}>Reset</button>
        </div> 
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Stopwatch/>);