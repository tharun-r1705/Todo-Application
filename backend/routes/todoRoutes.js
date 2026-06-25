const express = require('express');
const router = express.Router();

const { getTodo, updateTodo, deleteTodo, createTodo } = require('../controllers/todoController.js');

router.get('/', getTodo);

router.post('/', createTodo);

router.put('/:id', updateTodo);

router.delete('/:id', deleteTodo);

module.exports = router;