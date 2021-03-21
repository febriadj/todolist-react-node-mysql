const 
  express = require('express'),
  app = express(),
  dotenv = require('dotenv').config({ path: './.env' }),
  cors = require('cors'),
  port = 4000

'use strict'

app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// routes middleware
app.use('/todo', require('./routes/todolist'))

app.listen(port, err => err ? console.log(Error(err))
  : console.log('localhost:' + port)
)