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
  return boardUpdate;
};

const deleted = async id => {
  const boardIndex = DB[1].findIndex(el => el.id === id);
  DB[1].splice(boardIndex, 1);
  DB[2] = DB[2].filter(el => el.boardId !== id);
};

module.exports = { getAll, getById, create, update, deleted };
