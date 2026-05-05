import { Link, Outlet } from "react-router"

export default function Details(){
    return(
        <>
          <nav>
            <Link to="/Details">Details</Link>
            <Link to="Hello">Hello</Link>
            <Link to="Hi">Hi</Link>
          </nav>
          <h1>Welcome to the DETAILS PAGE</h1>
          <Outlet></Outlet>
        </>
    )
}