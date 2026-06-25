const express = require('express');
const router = express.Router();

const { getTodoList, updateTodoList, deleteTodoList, createTodoList } = require('../controllers/todoListController.js');

router.get('/', getTodoList);

router.put('/:id', updateTodoList);

router.delete('/:id', deleteTodoList);

router.post('/', createTodoList);

module.exports = router;