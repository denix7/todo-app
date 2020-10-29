import React from 'react';
import { useParams } from 'react-router-dom';
import { Tasks } from './Tasks/Tasks';
import data from '../../data/tasksData';
import { MenuTasks } from './MenuTasks';
import { TagsSlide } from '../Shared/TagsSlide/TagsSlide';
import { getProjectById } from '../../selectors/getProjectById';
import { CreateTask } from './CreateTask';
import { useSelector, useDispatch } from 'react-redux';

export const TasksPage = () => {
  const { projectId } = useParams();
  const projects = useSelector((state) => state.project);
  const project = projects.find( project => project.id === projectId);
  console.log(project, 'taskPage')

  return (
    <div className="container">
      <MenuTasks />
      <TagsSlide />
      <Tasks tasks={project.tasks} />
    </div>
  );
};

export default TasksPage;
