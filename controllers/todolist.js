const conn = require('../config/db')

'use strict'

exports.displayTodo = async function(req, res, next) {
  const sql = await `SELECT * FROM todolist ORDER BY created_at DESC`
  conn.query(sql, (err, rows) => {
    if (err) return console.log(Error(err))

    res.status(200).json(rows)
  })
}

exports.postTodo = async function(req, res, next) {
  const { activity } = req.body

  const sql = await `INSERT INTO todolist (activity) VALUES ( ? )`
  conn.query(sql, [activity], err => {
    if (err) return console.log(Error(err))

    res.status(200).json({
      status: 'success',
      message: 'successfully added activity'
    })
  })
}

exports.deleteTodo = async function(req, res, next) {
  const params = req.params.id

  const sql = await `DELETE FROM todolist WHERE id = ?`
  conn.query(sql, [params], err => {
    if (err) return console.log(Error(err))

    res.status(200).json({
      statue: 'success',
      message: 'successfully removed todolist'
    })
  })
}

exports.updateTodo = async function(req, res, next) {
  const params = req.params.id
  const { activity } = req.body
  
  const sql = await `UPDATE todolist SET activity = ? WHERE id = ?`
  conn.query(sql, [activity, params], err => {
    if (err) return console.log(Error(err))

    res.status(200).json({
      statue: 'success',
      message: 'successfully update todolist'
    })
  })
}