import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
    return (
        <header className={"header"}>
            <Link to="/">Random</Link>
            <Link to="/sets">Set</Link>
            <Link to="/">Help</Link>
            <Link to="/">About</Link>
        </header>
    )
}

export default NavBar;