import React from "react"
import "./Contact.scss"
import { useState } from 'react'
import { FaGithub, FaRegCopy } from "react-icons/fa"
import { CiLinkedin } from "react-icons/ci";
import { TiTick } from "react-icons/ti";

const Contact = () => {
    const [copy, setCopy] = useState(false)
    function copyEmail() {
        setCopy(true)
        var content = document.getElementById('email').innerText;
        navigator.clipboard.writeText(content);
    }
    return (
        <div className="contact" id="contact">
            <h2>SOCIAL AND CONTACT</h2>
            <div className="redesContainer">
                <a href="https://github.com/MauroNahuelPaul" target="_blank" rel="noopener"><FaGithub /> <br />github.com/MauroNahuelPaul</a>
                <a href="https://www.linkedin.com/in/mauronahuelpaul/" target="_blank" rel="noopener"><CiLinkedin /> <br />in/mauronahuelpaul</a>
            </div>
            <div className="emailContainer">
                <a id="email" href="mailto:nahuelpaul2002@gmail.com" target="_blank" rel="noopener">nahuelpaul2002@gmail.com</a>
                <button onClick={() => copyEmail()}>
                    {
                        !copy
                            ? <p><FaRegCopy /></p>
                            : <p><TiTick /></p>
                    }
                </button>
            </div>
        </div>
    )
}

export default Contact