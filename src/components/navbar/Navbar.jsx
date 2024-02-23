import "./Navbar.scss"
import React from "react"
import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <ul>
                    <li><Link to="./">HOME</Link></li>
                    <li><Link to="./proyects">PROYECTS</Link></li>
                    <li><Link to="./aboutme">ABOUT ME</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar