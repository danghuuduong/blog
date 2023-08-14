const express = require('express')
const app = express()
const morgan = require('morgan')


import { engine } from 'express-handlebars';

//Http logger
app.use(morgan('combined'))

//template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
//------------------------------------
app.get('/', function (req, res) {
  res.send(
    `
      <h1> hello bn</h1>
    `
  )
})

app.listen(3000)