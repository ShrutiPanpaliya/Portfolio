import React from 'react';
import ProjectItem from '../components/ProjectItem';
import '../styles/Projects.css';
import { ProjectList } from '../Helpers/ProjectList';
function Projects() {
  return (
    <div className='projects'>
      <h1>Projects</h1>
      <div className='projectlist'>
        {ProjectList.map((project,idx)=>
        {
         return <ProjectItem  id={idx} name={project.name} image={project.image} />
        })}
        {/* <ProjectItem name='CHAT APPLICATION' image={chat}/>
        <ProjectItem name='TIC TAC TOE' image={tictactoe}/>
        <ProjectItem name='PASSWORD MANAGER' image={passwordmanager}/>
        <ProjectItem name='TASK' image={task}/>
        <ProjectItem name='STORAGE' image={storage}/>
        <ProjectItem name='LOGISTICS' image={logistic}/> */}
        
      </div>
      
    </div>
  );
}

export default Projects;
