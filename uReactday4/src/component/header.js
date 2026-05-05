function Header(){
    return(
        <div className="heading">

            <img  className="images" src="https://ifp.world/wp-content/uploads/2021/05/Myntra-Logo.png" height="80px" width="80px"></img>
            
            <div className="options">
                <button className="buti">Men</button>
                <button className="buti">Women</button>
                <button className="buti">Kids</button>
                <button className="buti">Home and Living</button>
                <button className="buti">Beauty</button>
                <button className="buti">Studio</button>
            </div>
                <input className="searchbar" placeholder="Search for products,brand and more"></input>

                <div className="profiles">
                    <button className="pro">Profiles</button>
                    <button className="pro">Wishlist</button>
                    <button className="pro">Bags</button>
                </div>

        </div>
    )
}

export default Header;