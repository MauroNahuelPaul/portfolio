import React from "react"
import "./Skills.scss"
import { FaAngular, FaCss3Alt, FaFigma, FaGithub, FaHtml5, FaNodeJs, FaNpm, FaReact, FaSass } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5";
import { SiFirebase, SiMongodb, SiMysql, SiTypescript, SiVite } from "react-icons/si";

const Skills = () => {
    return (
        <div id="skills">
            <h2>SKILLS</h2>
            <div>
                <article>
                    <h4>HTML 5</h4>
                    <FaHtml5 />
                </article>
                <article>
                    <h4>CSS 3</h4>
                    <FaCss3Alt />
                </article>
                <article>
                    <h4>SASS</h4>
                    <FaSass />
                </article>
                <article>
                    <h4>SASS</h4>
                    <FaSass />
                </article>
                <article>
                    <h4>JAVA SCRIPT</h4>
                    <IoLogoJavascript />
                </article>
                <article>
                    <h4>TYPE SCRIPT</h4>
                    <SiTypescript />
                </article>
                <article>
                    <h4>REACT JS</h4>
                    <FaReact />
                </article>
                <article>
                    <h4>VITE JS</h4>
                    <SiVite />
                </article>
                <article>
                    <h4>ANGULAR</h4>
                    <FaAngular />
                </article>
                <article>
                    <h4>NODE JS</h4>
                    <FaNodeJs />
                </article>
                <article>
                    <h4>EXPRESS</h4>
                </article>
                <article>
                    <h4>NEST</h4>
                </article>
                <article>
                    <h4>MONGO DB</h4>
                    <SiMongodb />
                </article>
                <article>
                    <h4>FIREBASE</h4>
                    <SiFirebase />
                </article>
                <article>
                    <h4>MY SQL</h4>
                    <SiMysql />
                </article>
                <article>
                    <h4>NPM</h4>
                    <FaNpm />
                </article>

                <article>
                    <h4>GITHUB</h4>
                    <FaGithub />
                </article>
                <article>
                    <h4>FIGMA</h4>
                    <FaFigma />
                </article>
                
                
                
                
                
            </div>
        </div>
    )
}

export default Skills