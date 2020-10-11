const DB = require('../../common/inMemoryDB');

const getAll = async () => DB[0];

const get = async id => DB[0].find(el => el.id === id);

module.exports = { getAll, get };
