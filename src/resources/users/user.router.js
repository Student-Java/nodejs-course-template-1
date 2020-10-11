const router = require('express').Router();
const User = require('./user.model');
const userService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await userService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const user = await userService.getById(req.params.id);
  res.json(User.toResponse(user));
});

router.route('/').post(async (req, res) => {
  const { name, login, password } = req.body;
  const user = await userService.create(new User({ name, login, password }));
  res.json(User.toResponse(user));
});

router.route('/:id').put(async (req, res) => {
  const userUpdate = await userService.update(req.params.id, req.body);
  res.json(User.toResponse(userUpdate));
});

router.route('/:id').delete(async (req, res) => {
  const userDelete = await userService.deleted(req.params.id);
  res.json(User.toResponse(userDelete));
});

module.exports = router;
