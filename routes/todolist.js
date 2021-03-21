'use strict'

const router = require('express').Router()
const { displayTodo, postTodo } = require('../controllers/todolist')

router.get('/', displayTodo)
router.post('/', postTodo)

module.exports = router