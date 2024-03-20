import React  from "react"
import "./Proyects.scss"
import { FaGithub } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";
const ProyectInd = ({proyect}) =>{
    return(
        <div id="Proyectind">
            <div>
                <img src={proyect.img}/>
            </div>
            <div>
                <h3>{proyect.title}</h3>
                <p>{proyect.description}</p>
                <a href={proyect.live}> Deploy <MdOutlineLiveTv /></a>
                <a href={proyect.github}><FaGithub /></a>
            </div>
        </div>
    )
}

export default ProyectInd