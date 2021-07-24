const fetch = require('node-fetch')
const { employeesAdd } = require('./data')

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

const NumOfIDDigits = 9
const employeeIDGetRandom = () => {
    const id = Math.floor(Math.random() * Math.pow(10, NumOfIDDigits))
    let result = id.toString()
    while (result.length < NumOfIDDigits) {
        result = "0" + result
    }
    return result
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
            employeeID: employeeIDGetRandom()
        })
    })
    return true
}