'use strict'

const 
  mysql = require('mysql'),
  todolist = require('./dbTable')

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})

conn.connect(function(err) {
  if (err) return console.log(Error(err))

  todolist()
    .then(sql => conn.query(sql, err => err ? console.log(err) : null))
    .catch(err => console.log(Error(err)))   
    
  console.log('mysql connected')
})

module.exports = conn