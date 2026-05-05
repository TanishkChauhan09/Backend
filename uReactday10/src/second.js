
import { useContext } from "react"
import globalcontext from "./Global"

export default function Second(){

    const data = useContext(globalcontext);

    return(
        <>
        <h1>{data} This is chidren2</h1>
        
        </>
    )
}