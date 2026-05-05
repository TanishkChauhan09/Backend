import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";

function GithubProfile(){

    // Header
    // Body : we will make 10 cards

    return(
       <>
          <Header></Header>
          <Body></Body>
       </>
    )
}
 

const reactroot = ReactDOM.createRoot(document.getElementById('root'));
reactroot.render(<GithubProfile/>);









// https://api.github.com/users/tatlorotwell (api for a particular person information)
// https://api.github.com/users?per_page=${count} (api for number of person)
