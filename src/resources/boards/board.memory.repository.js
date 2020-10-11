const DB = require('../../common/inMemoryDB');

const getAll = async () => DB[1];

const getById = async id => DB[1].find(el => el.id === id);

const create = async board => {
  DB[1].push(board);
  return getById(board.id);
};

const update = async (id, board) => {
  const boardUpdate = DB[1].find(el => el.id === id);
  boardUpdate.title = board.title;
  boardUpdate.columns = board.columns;
  return getById(id);
};

const deleted = async id => {
  const boardIndex = DB[1].findIndex(el => el.id === id);
  return DB[1].splice(boardIndex, 1);
};

module.exports = { getAll, getById, create, update, deleted };
