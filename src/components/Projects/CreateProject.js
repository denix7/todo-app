import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProject, deleteProject } from '../../actions/project';

export const CreateProject = () => {
  const projects = useSelector((state) => state.project);
  const dispatch = useDispatch();

  const save = (e) => {
    e.preventDefault();
    dispatch(addProject(e.target.project.value));
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          save(e);
        }}
      >
        <input type="text" name="project" placeholder="New project" />
        <button type="button">Save</button>
      </form>

      <div>
        {/* <ul>
          {projects.map((project) => {
            return (
              <li key={project.id}>
                {project.value}{' '}
                <button type="button" onClick={() => remove(project.id)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul> */}
      </div>
    </div>
  );
};

export default CreateProject;
