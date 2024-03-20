import "./Navbar.scss"
import React from "react"
import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <ul>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#aboutme">ABOUT ME</a></li>
                    <li><a href="#skills">SKILLS</a></li>
                    <li><a href="#proyects">PROYECTS</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar