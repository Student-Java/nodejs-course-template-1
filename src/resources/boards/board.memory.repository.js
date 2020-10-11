const DB = require('../../common/inMemoryDB');

const getAll = async () => {
  // TODO: mock implementation. should be replaced during task development
  return DB[1];
};

module.exports = { getAll };
