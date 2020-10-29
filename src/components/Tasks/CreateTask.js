import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask } from '../../actions/project';
import { useParams } from 'react-router-dom';

export const CreateTask = () => {
  const projects = useSelector((state) => state.project);
  // console.log(tasks);
  const { projectId } = useParams();

  const tasks2 = projects.find((item) => item.id === projectId).tasks;
  console.log(tasks2);

  const dispatch = useDispatch();
  console.log(projectId)
  
  const save = (e) => {
    e.preventDefault();
    dispatch(addTask(projectId, 'e.target.task.value'));
  };

  const remove = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          save(e);
        }}
      >
        <input type="text" name="task" placeholder="New task" />
        <button type="button">Save</button>
      </form>

      <div>
        <ul>
          {tasks2.map((task) => {
            return (
              <li key={task.id}>
                {task.value}{' '}
                <button type="button" onClick={() => remove(task.id)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CreateTask;
