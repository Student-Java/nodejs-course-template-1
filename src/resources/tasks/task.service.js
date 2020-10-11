const tasksRepo = require('./task.memory.repository');

const getAll = async boardId => tasksRepo.getAll(boardId);

const getById = async taskId => tasksRepo.getById(taskId);

const create = async task => tasksRepo.create(task);

const update = async (taskId, task) => tasksRepo.update(taskId, task);

const deleted = async (boardId, taskId) => tasksRepo.deleted(boardId, taskId);

module.exports = { getAll, getById, create, update, deleted };
