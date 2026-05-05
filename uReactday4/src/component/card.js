function Card(props){
    return (
        <div className="card" style={{border:"2px solid black" , padding:"2px"}}>
            <img src="https://pictures.kartmax.in/cover/live/600x800/quality=6/sites/aPfvUDpPwMn1ZadNKhP7/product-images/8905745091318/660/TTTS000770_5.jpg" height="200px" width="200px"/>
            <div className="headings" style={{textAlign:"center",padding:"2px"}}>
                <h2 style={{margin:"10px"}}>{props.cloth}</h2>
                <h1 style={{margin:"10px"}}>{props.offer}</h1>
                <h2 style={{margin:"10px"}}>Shop Now</h2>
                <h2>Price:{props.Price}</h2>
            </div>
        </div>
    )
}

export default Card;