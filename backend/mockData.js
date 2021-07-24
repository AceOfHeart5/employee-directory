const fetch = require('node-fetch')
const { employeesAdd, employeesSort } = require('./data')

const Departments = [
    "Human Resources", 
    "Accounting", 
    "Sales", 
    "Administration", 
    "Engineering"
]

const departmentGetRandom = () => {
    const index = Math.floor(Math.random() * Departments.length)
    return Departments[index]
}

const NumOfEmployees = 100
module.exports.prepareMockData = async () => {
    let res = await fetch(`https://randomuser.me/api/?results=${NumOfEmployees}`)
    let data = await res.json()
    data.results.forEach(e => {
        employeesAdd({
            nameFirst:  e.name.first,
            nameLast:   e.name.last,
            department: departmentGetRandom(),
            email:      e.email,
            phone:      e.phone,
            picture:    e.picture.large,
            employeeID: ""
        })
    })
    return true
}