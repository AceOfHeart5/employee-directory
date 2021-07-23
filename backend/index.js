const { employeesGet } = require('./data')

const { prepareMockData } = require('./mockData')
prepareMockData()

const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: false })) // check if necessary
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/employees', (req, res) => {
    console.log('employees grabbed')
    res.send(employeesGet())
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
