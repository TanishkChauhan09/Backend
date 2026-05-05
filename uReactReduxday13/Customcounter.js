import { useState } from "react";
import { useDispatch } from "react-redux";
import {CustomIncreaser,Increment,Decrement} from "./Slicer1"

export default function Customcounter(){

    const [number,setNumber] = useState("");
    const dispatch = useDispatch();

    function handleclick()
    {
        dispatch(CustomIncreaser(Number(number)));
        setNumber("");
    }

    return(
      <>
         <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
         <button onClick={handleclick}>Submit</button>
      </>
    )
}