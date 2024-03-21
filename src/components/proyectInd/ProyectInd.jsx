import React from "react"
import "./Proyects.scss"
import { FaGithub } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";
const ProyectInd = ({ proyect }) => {
    return (
        <div className="proyectInd" id="proyectInd">
            <div>
                <img src={proyect.img} />
            </div>
            <div className="info">
                <h3>{proyect.title}</h3>
                <p>{proyect.description}</p>
                <p>{proyect.technologies}</p>
                <div>
                    <a href={proyect.linkDeploy}> Deploy <MdOutlineLiveTv /></a>
                    <a href={proyect.linkGithub}><FaGithub /></a>
                </div>

            </div>
        </div>
    )
}

export default ProyectInd