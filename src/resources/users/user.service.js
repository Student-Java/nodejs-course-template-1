const usersRepo = require('./user.memory.repository');

const getAll = async () => usersRepo.getAll();

const getById = async id => usersRepo.getById(id);

const create = async user => usersRepo.create(user);

const update = async (userID, user) => usersRepo.update(userID, user);

const deleted = async id => usersRepo.deleted(id);

module.exports = { getAll, getById, create, update, deleted };
