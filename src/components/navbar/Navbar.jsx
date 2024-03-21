import "./Navbar.scss"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [hamburger, setHamburger] = useState(false)
    return (
        <header>
            <nav className="navbar">
                {
                    !hamburger
                        ? <button className="hamburger_button" onClick={() => setHamburger(true)} > <RxHamburgerMenu /></button>

                        :
                        <ul className="hamburger_menu">
                            <button className="hamburger_button" onClick={() => setHamburger(false)} > <RxCross1 /></button>
                            <li><a href="#home">HOME</a></li>
                            <li><a href="#aboutme">ABOUT ME</a></li>
                            <li><a href="#skills">SKILLS</a></li>
                            <li><a href="#proyects">PROYECTS</a></li>
                            <li><a href="#contact">CONTACT</a></li>
                        </ul>
                }

            </nav>
        </header >
    )
}
export default Navbar