const router = require('express').Router();
const Board = require('./board.model');
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll();
  // map board fields
  res.json(boards.map(Board.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const boards = await boardService.get(req.param.id);
  // map board fields
  res.json(boards.map(Board.toResponse));
});

module.exports = router;
