import React from 'react'
import {
    ProjectCard,
    ProjectTitle,
    Task
} from './projects.styles'
import { FaCircle } from 'react-icons/fa';

const Projects = ({projects}) => 
<ProjectCard>
{projects.map(project => 
    <div key={project.ProjectTitle}>
    <ProjectTitle href={project.projectUrl}>{project.project}</ProjectTitle>
    {project.description.map( task => <ul key={task}><FaCircle fontSize="0.5em" paddingRight="10px"/><Task>{task} </Task></ul> )}
    </div>)}
</ProjectCard>

export default Projects