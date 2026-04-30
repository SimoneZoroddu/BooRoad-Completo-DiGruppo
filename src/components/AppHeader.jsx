import { NavLink } from "react-router-dom"


export default function AppHeader() {


    return (


        <nav className="navbar bg-warning">
            <div className="container-fluid">
                <NavLink className="navbar-brand text-primary" to="/">
                   <i className="bi bi-backpack3"></i> BooRoad
                </NavLink>
            </div>
        </nav>
    )
}