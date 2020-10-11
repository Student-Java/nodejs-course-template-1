const router = require('express').Router();
const Task = require('./task.model');
const taskService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await taskService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(tasks.map(Task.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const tasks = await taskService.get(req.param.id);
  // map task fields
  res.json(tasks.map(Task.toResponse));
});

module.exports = router;
