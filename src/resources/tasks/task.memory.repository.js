const DB = require('../../common/inMemoryDB');

const getAll = boardId => DB[2].filter(el => el.boardId === boardId);

const getById = async id => DB[2].find(el => el.id === id);

const create = async task => {
  DB[2].push(task);
  return getById(task.id);
};

const update = async (taskId, task) => {
  const taskUpdate = DB[2].find(el => el.id === taskId);
  taskUpdate.title = task.title;
  taskUpdate.order = task.order;
  taskUpdate.description = task.description;
  taskUpdate.userId = task.userId;
  taskUpdate.boardId = task.boardId;
  taskUpdate.columnId = task.columnId;
  return DB[2].find(el => el.id === taskId);
};

const deleted = async (boardId, taskId) => {
  const taskIndex = DB[2].findIndex(
    el => el.id === taskId && el.boardId === boardId
  );
  DB[2].splice(taskIndex, 1);
};

module.exports = { getAll, getById, create, update, deleted };
