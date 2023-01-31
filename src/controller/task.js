const taskService = require('../service/task');

const getTasks = async (req, res) => {
  console.log('GET /tasks Controller');
  const tasks = await taskService.getTasks();
  res.status(200).send(tasks);
};

const getTask = async (req, res) => {
  console.log('GET /tasks/:id Controller');
  const task = await taskService.getTask(req.params.id);
  res.status(200).send(task);
};

const postTask = async (req, res) => {
  console.log('POST /tasks Controller');
  const task = await taskService.postTask(req.body);
  res.status(201).send(task);
};

const updateTask = async (req, res) => {
  console.log('PUT /tasks/:id Controller');
  const task = await taskService.updateTask(req.params.id, req.body);
  res.status(200).send(task);
};
const changeTask = async (req, res) => {
  console.log('PATCH /tasks/:id Controller');
  const task = await taskService.changeTask(req.params.id, req.body);
  res.status(200).send(task);
};

const deleteTask = async (req, res) => {
  console.log('DELETE /task/:id Controller');
  const task = await taskService.deleteTask(req.params.id);
  res.status(200).send(task);
};

module.exports = { getTasks, getTask, postTask, updateTask, changeTask, deleteTask };