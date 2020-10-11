const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const taskService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await taskService.getAll(req.params.boardId);
  if (!tasks) res.status('404');
  res.json(tasks);
});

router.route('/:id').get(async (req, res) => {
  const task = await taskService.getById(req.params.id);
  if (!task) res.status('404');
  res.json(task);
});

router.route('/').post(async (req, res) => {
  const task = await taskService.create(
    new Task({
      title: req.body.title,
      order: req.body.columns,
      description: req.body.description,
      userId: req.body.userId,
      boardId: req.params.boardId,
      columnId: req.body.columnId
    })
  );
  res.json(task);
});

router.route('/:id').put(async (req, res) => {
  const task = await taskService.update(req.params.id, req.body);
  res.json(task);
});

router.route('/:id').delete(async (req, res) => {
  await taskService.deleted(req.params.boardId, req.params.id);
  res.status('204').send('board deleted');
});

module.exports = router;
