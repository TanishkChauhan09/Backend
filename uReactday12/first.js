import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route,Link } from "react-router";
import Home1 from "./src/Home";
import Contact1 from "./src/Contact";
import Dashboard1 from "./src/Dashboard";
import About1 from "./src/About";
import Details from "./src/Details";
import Hello from "./src/Hello";
import Hi from "./src/Hi"
import Detaildefault from "./src/Detaildefault";
import Github from "./src/Github";

function App(){
    return(
        <>
          <BrowserRouter>

           {/* Header section  (Comments are also the part of javascript isiliye wo mera brackets me aajaate hai)*/} 

            <nav>
              <Link to="/">Home</Link>
              <Link to="/Contact">Contact</Link>
              <Link to="/Dashboard">Dashboard</Link>
              <Link to="/About">About</Link>
              <Link to="/Details">Details</Link>
              <Link to="/Github">Github</Link>
            </nav>


            <Routes>
                <Route path="/" element={<Home1/>}></Route>
                <Route path="/Contact" element={<Contact1/>}></Route>
                <Route path="/Dashboard" element={<Dashboard1/>}></Route>
                <Route path="/About" element={<About1/>}></Route>
                <Route path="/Details" element={<Details/>}>
                  <Route index element={<Detaildefault/>}></Route>
                  <Route path="Hello" element={<Hello/>}></Route>
                  <Route path="Hi" element={<Hi/>}></Route>
                </Route>
                <Route path="/Github/:name" element={<Github/>}></Route>
            </Routes>


            {/* Footer section */}
          </BrowserRouter>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);