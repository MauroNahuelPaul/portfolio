import React  from "react"
import "./Proyects.scss"
import proyectsJson from "../../json/proyects.json"
import ProyectInd from "../proyectInd/ProyectInd"
const Proyects = () =>{
    return(
        <div className="proyects" id="proyects">
            <h2>Proyects</h2>
            {proyectsJson.map((proyect)=> <ProyectInd key={proyect.title} proyect={proyect}/>)}
        </div>
    )
}

export default Proyects