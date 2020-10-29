import React from 'react';
import { PropTypes } from 'prop-types';
import { TaskCard } from '../TaskCard/TaskCard';
import { CreateTask } from '../CreateTask';

export const Tasks = ({ tasks }) => {
  return (
    <>
      <CreateTask/>
      <div className="card-container">
        {tasks.map((task) => {
          return <TaskCard task={task} key={task.id} />;
        })}
      </div>
    </>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
};

Tasks.defaultProps = {
  tasks: [],
};

export default Tasks;
