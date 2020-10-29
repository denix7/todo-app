import React from 'react';
import ProjectItem from './ProjectItem';
import data from '../../data/projectsData';
import { useSelector, useDispatch } from 'react-redux';

const Projects = () => {

  const projects = useSelector((state) => state.project);
  const dispatch = useDispatch();

  return (
    <div className="card-container" id="projects">
      {projects.map((project) => {
        return <ProjectItem key={project.id} project={project} />;
      })}
    </div>
  );
};

export default Projects;
