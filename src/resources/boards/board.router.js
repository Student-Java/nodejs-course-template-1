const router = require('express').Router();
const Board = require('./board.model');
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll();
  res.json(boards.map(Board.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const board = await boardService.getById(req.params.id);
  if (!board) res.status('404');
  res.json(board);
});

router.route('/').post(async (req, res) => {
  const { title, columns } = req.body;
  const board = await boardService.create(new Board({ title, columns }));
  res.json(Board.toResponse(board));
});

router.route('/:id').put(async (req, res) => {
  const boardUpdate = await boardService.update(req.params.id, req.body);
  res.json(Board.toResponse(boardUpdate));
});

router.route('/:id').delete(async (req, res) => {
  await boardService.deleted(req.params.id);
  res.status('204').send('board deleted');
});

module.exports = router;
