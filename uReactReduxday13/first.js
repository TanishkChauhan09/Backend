import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import stores from "./Stores";
import Counting from "./Counting";
import Customcounter from "./Customcounter";

function App(){
    return(
           <Provider store={stores}>
                <Counting/> 
                <br></br>
                <br></br>
                <Customcounter/>
           </Provider>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);