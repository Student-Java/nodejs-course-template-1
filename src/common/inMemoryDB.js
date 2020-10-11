const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');

// user: id, name, login, password
// board: id, title, columns
// task: id, title, order, description', userId, boardId, columnId

const DB = [[], [], []];

DB[0].push(new User(), new User(), new User());
DB[1].push(new Board(), new Board(), new Board());
DB[2].push(new Task(), new Task(), new Task());

module.exports = DB;
