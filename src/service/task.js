const { generateTask, getIdEntry } = require('../utils/serverUtils')
const models = require('../../database/models');

const getTasks = () => {
  console.log("GET /tasks Service");
  return models.Tasks.findAll();
}

const getTask = (id) => {
  console.log("GET /task/:id Service");
  return models.Tasks.findOne({
    where: { id: id }
  });
}

const postTask = (taskData) => {
  console.log("POST /tasks Service");
  const newTask = models.Tasks.create({ task: taskData.task });
  return newTask;
}

const updateTask = (id, taskData) => {
  console.log("PUT /task/:id Service");
  if (models.Tasks.findOne({
    where: { id: id }
  }) !== null) {
    models.Tasks.update(taskData, {
      where: { id: id }
    })
    return models.Tasks.findOne({
      where: { id: id }
    });
  }
  postTask(taskData);
}

const changeTask = async (id, taskData) => {
  console.log("PATCH /task/:id Service");

  if (await models.Tasks.findOne({
    where: { id: id }
  })) {
    await models.Tasks.update({ isComplete: taskData.isComplete }, {
      where: { id: id }
    });
    return models.Tasks.findOne({
      where: { id: id }
    });
  }
  console.log("Entry with ${id} does not exist")
  return `Entry with ${id} does not exist`
}

const deleteTask = (id) => {
  console.log("DELETE /task/:id Service")
  models.Tasks.destroy({
    where: { id: id }
  });

  return models.Tasks.findAll();
}

module.exports = { getTasks, getTask, postTask, updateTask, changeTask, deleteTask }