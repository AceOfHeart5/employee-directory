const { employeesGet, employeeDelete } = require('./data')

const { prepareMockData } = require('./mockData')
prepareMockData()

const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: false })) // check if necessary
const port = 3001

app.get('/', (_, res) => {
	res.send('The test server is running!')
})

app.get('/employees', (req, res) => {
	res.send(employeesGet(req.query))
})

app.delete('/delete', (req, res) => {
	let result = 'delete fail'
	if (employeeDelete(req.body.employeeID)) {
		result = 'delete success'
	}
	res.send(result)
})

app.post('/add', (req, res) => {
	let result = 'add fail'
	res.send(result)
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
