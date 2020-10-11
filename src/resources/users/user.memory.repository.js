const DB = require('../../common/inMemoryDB');

const getAll = async () => DB[0];

const getById = async id => DB[0].find(el => el.id === id);

const create = async user => {
  DB[0].push(user);
  return getById(user.id);
};

const update = async (id, user) => {
  const userUpdate = DB[0].find(el => el.id === id);
  userUpdate.name = user.name;
  userUpdate.login = user.login;
  userUpdate.password = user.password;
  return getById(id);
};

const deleted = async id => {
  const userIndex = DB[0].findIndex(el => el.id === id);
  return DB[0].splice(userIndex, 1);
};

module.exports = { getAll, getById, create, update, deleted };
