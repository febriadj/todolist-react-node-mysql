'use strict'

const router = require('express').Router()
const { 
  displayTodo, postTodo, 
  deleteTodo, updateTodo 
} = require('../controllers/todolist')

router.get('/', displayTodo)
router.post('/', postTodo)
router.delete('/', deleteTodo)
router.put('/', updateTodo)

module.exports = router