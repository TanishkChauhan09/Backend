import {useState} from "react";

export default function Add({value})
{
    const [count,setcount] = useState(0);

    return(
        <>
          <h1>{value}:{count}</h1>
          <button onClick={()=>setcount(count+1)}>Vote</button>
        </>
    )
}