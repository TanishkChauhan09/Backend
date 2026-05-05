import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import Card from "./component/card";
import Header from "./component/header";
import Footer from "./component/footer";
import arr from "./utils/dummy";
import {fun1 as f1 , fun2 as f2} from "./utils/dummy"; // not using this part ,in this code

function App(){

    let[Arr , setArr] = useState(arr);

    function sortbyprice(){
        Arr.sort((a,b)=>a.price-b.price);
        setArr([...Arr]);
    }

    function filterbyprice(){
          const Arr2 = arr.filter((value)=>value.price>499)
          setArr(Arr2);
    }


    return(
    <>
    {/* // Header */}
        <Header/>
        <button className="bt1" onClick={sortbyprice}>Sort by price</button>
        <button className="bt2" onClick={filterbyprice}>Above price 499</button>
        {/* // Body */}
        <div className="middle" style={{display:"flex" , flexWrap:"wrap",gap:"10px"}}>
            {/* <Card cloth="T-Shirts" offer="20-80%off"/>
            <Card cloth="Jeans" offer="40-900%off"/>
            <Card cloth="Kurta" offer="10-20%off"/>
            <Card cloth="Pajama" offer="30-40%off"/>
            <Card cloth="Blazer" offer="40-80%off"/>
            <Card cloth="Wedding outfits" offer="20-900%off"/>
            <Card cloth="Summer special t-shirts" offer="50-70%off"/>
            <Card cloth="Trouser" offer="10-30%off"/>
            <Card cloth="sherwaani" offer="40-70%off"/>
            <Card cloth="shoes" offer="10-20%off"/>
            <Card cloth="bags" offer="40-50%off"/>
            <Card cloth="carpet" offer="30-35%off"/> */}

            {/* [<card/> <card/> <card/> <card/> <card/> <card/> <card/> ] */}

            {
                // yha Arr isliye likha hai kyuki jb maine button pr click kiya toh sortbyprice function call hoga
                // tb jo changes hue honge wo Arr me hi toh huw the isiliye ab uske baad ye Arr.--- likha hai
                Arr.map((value,index)=> <Card key={index} cloth={value.cloth} offer={value.offer} Price={value.price}/>)
            }

        </div>
        {/* // Footer */}
        <Footer/>

        </>
    )
}

const Reactroot = ReactDOM.createRoot(document.getElementById('root'));

Reactroot.render(<App/>);