const conn = require('../config/db')

'use strict'

exports.displayTodo = async function(req, res, next) {
  const sql = await `SELECT * FROM todolist`
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