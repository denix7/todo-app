import projects from "../reducers/project";

const ADD = 'ADD';
const DELETE = 'DELETE';
const ADDTASK = 'ADDTASK';
const DELETETASK = 'DELETE';

export const addProject = (x) => ({
  type: ADD,
  data: {
    id: Math.floor(Math.random() * 100).toString(),
    name: x,
    date: Date.now(),
    tasks: []
  },
});

export const addTask = (id, x) => ({
  type: ADDTASK,
  id,
  x
});

export const deleteTask = (x) => ({
  // type: DELETETASK,
  // data: {
  //   id: Math.floor(Math.random() * 100).toString(),
  //   date: Date.now(),
  //   tasks: projects.slice(x)
  // },
});

export const deleteProject = (id) => ({
  type: DELETE,
  id,
});