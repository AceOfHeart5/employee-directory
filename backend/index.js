const { employeesGet } = require('./data')

const { prepareMockData } = require('./mockData')
prepareMockData()


const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/employees', (req, res) => {
    res.send(employeesGet())
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
