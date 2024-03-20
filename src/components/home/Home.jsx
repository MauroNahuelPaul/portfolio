import React from "react"
import "./Home.scss"
import { FaGithub } from "react-icons/fa"
import { CiLinkedin } from "react-icons/ci";

const Home = () => {
    return (
        <div className="home" id="home">
            <div className="nombre">
                <h1>MAURO NAHUEL PAUL</h1>
                <h2>FULL STACK DEVELOPER</h2>
            </div>
            <div className="presentacion">
                <p>
                    Turning Ideas into Solutions <br /> Committed Full Stack Developer Pursuing Technological Excellence
                </p>
            </div>
            <div className="links">
                <a href="https://github.com/MauroNahuelPaul" target="_blank" rel="noopener"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/mauronahuelpaul/" target="_blank" rel="noopener"><CiLinkedin /></a>
            </div>
        </div>
    )
}

export default Home