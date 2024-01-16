import { NavLink } from "react-router-dom";

const MainNavigation = () => {
    
    return (
        <nav className="main-navigation">
            <div className="main-navigation-left">
                <NavLink to="/" activeClassName="active" exact className={"main-navigation-link"}>Home</NavLink>
                <NavLink to="/about" activeClassName="active" className={"main-navigation-link"}>About</NavLink>
                <NavLink to="/contact" activeClassName="active" className={"main-navigation-link"}>Contact</NavLink>
            </div>

            <div className="main-navigation-right">
                <NavLink to="/login" activeClassName="active" className={"main-navigation-link"}>Login</NavLink>
                <NavLink to="/signup" activeClassName="active" className={"main-navigation-link"}>Sign Up</NavLink>
            </div>
        </nav>
    )
}

export default MainNavigation;