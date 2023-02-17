import React from "react";
import { useParams,Link } from "react-router-dom";
import {ProjectList} from '../Helpers/ProjectList'
import '../styles/ProjectDisplay.css';
function ProjectDisplay()
{
    const {id}=useParams();
    const project=ProjectList[id];

    return(
        <div className="project">
            <h1>{project.name}</h1>
            <img src={project.image}/>
            <p><b>Skills:</b>
                {project.skill}
            </p>
            <i class="fa fa-github" aria-hidden="true"></i>
            <Link to={project.github}>{project.github}</Link>
            
            
        </div>
    );

}
export default ProjectDisplay;