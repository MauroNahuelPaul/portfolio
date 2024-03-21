import React from "react"
import "./Skills.scss"
import { FaAngular, FaCss3Alt, FaFigma, FaGithub, FaHtml5, FaNodeJs, FaNpm, FaReact, FaSass } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5";
import { SiFirebase, SiMongodb, SiMysql, SiTypescript, SiVite } from "react-icons/si";

const Skills = () => {
    return (
        <div className="skills" id="skills">
            <h2>SKILLS</h2>
            <div>
                <article>
                    <h3>HTML 5</h3>
                    <spam><FaHtml5 /></spam>
                </article>
                <article>
                    <h3>CSS 3</h3>
                    <spam><FaCss3Alt /></spam>
                </article>
                <article>
                    <h3>SASS</h3>
                    <spam><FaSass /></spam>
                </article>
                <article>
                    <h3>SASS</h3>
                    <spam><FaSass /></spam>
                </article>
                <article>
                    <h3>JAVA SCRIPT</h3>
                    <spam><IoLogoJavascript /></spam>
                </article>
                <article>
                    <h3>TYPE SCRIPT</h3>
                    <spam><SiTypescript /></spam>
                </article>
                <article>
                    <h3>REACT JS</h3>
                    <spam><FaReact /></spam>
                </article>
                <article>
                    <h3>VITE JS</h3>
                    <spam><SiVite /></spam>
                </article>
                <article>
                    <h3>ANGULAR</h3>
                    <spam><FaAngular /></spam>
                </article>
                <article>
                    <h3>NODE JS</h3>
                    <spam><FaNodeJs /></spam>
                </article>
                <article>
                    <h3>EXPRESS</h3>
                </article>
                <article>
                    <h3>NEST</h3>
                </article>
                <article>
                    <h3>MONGO DB</h3>
                    <spam><SiMongodb /></spam>
                </article>
                <article>
                    <h3>FIREBASE</h3>
                    <spam><SiFirebase /></spam>
                </article>
                <article>
                    <h3>MY SQL</h3>
                    <spam><SiMysql /></spam>
                </article>
                <article>
                    <h3>NPM</h3>
                    <spam><FaNpm /></spam>
                </article>

                <article>
                    <h3>GITHUB</h3>
                    <spam><FaGithub /></spam>
                </article>
                <article>
                    <h3>FIGMA</h3>
                    <spam><FaFigma /></spam>
                </article>





            </div>
        </div>
    )
}

export default Skills