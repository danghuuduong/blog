const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('combined'))
app.get('/', function (req, res) {
  res.send(
    `
      <h1> hello bn</h1>
    `
  )
})

app.listen(3000)