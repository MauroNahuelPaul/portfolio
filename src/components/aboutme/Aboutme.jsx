import React from "react"
import "./Aboutme.scss"
import { useState } from 'react'
import { FaDownload } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";

const Aboutme = () => {
    const [dowload, setDowload] = useState(false)
    return (
        <div className="aboutme" id="aboutme">
            <h2>ABOUT ME</h2>
            <p>I'm Mauro Nahuel Paul, a passionate programming enthusiast and recent graduate as a full stack developer. My expertise spans from Frontend technologies such as HTML, CSS, and JavaScript, to Backend development with Node.js, Express, and Nest.<br /><br />I've worked with databases like MongoDB and MySQL, and I'm well-versed in RESTful APIs and WebSockets. Although I'm new to the professional scene, my goal is to kickstart my career and contribute my skills to a dynamic team.<br /><br />Ready to embark on my journey as a full stack developer!</p>
            <a href="/files/Mauro-Nahuel-Paul_CV.pdf" target="_blank" rel="noeferrer" download={''} onClick={() => setDowload(true)}>
                {
                    !dowload
                        ? <spam><FaDownload /> Download CV</spam>
                        : <spam><TiTick /> Downloaded</spam>
                }
            </a>
        </div>
    )
}

export default Aboutme