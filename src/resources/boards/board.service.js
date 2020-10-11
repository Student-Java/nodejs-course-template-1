const boardRepo = require('./board.memory.repository');

const getAll = () => boardRepo.getAll();

const getById = id => boardRepo.getById(id);

const create = board => boardRepo.create(board);

const update = (id, board) => boardRepo.update(id, board);

const deleted = id => boardRepo.deleted(id);

module.exports = { getAll, getById, create, update, deleted };
