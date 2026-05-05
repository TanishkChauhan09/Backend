import { useState } from "react";

function Increment({counts , setCounts}){ 

    return(
        <>
        <h1>Child Count is:{counts}</h1>
        <button onClick={()=>setCounts(counts+1)}>Increment</button>
        
        </>
    )

}

export default Increment;