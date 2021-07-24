const employees = []

const employeeIncludesQueryField = (employee, query, field) => {
    let qf = query[field.toLowerCase()]
    let result = false
    if (qf === undefined) {
        result = true
    }
    if (qf && employee[field].toLowerCase().includes(qf)) {
        result = true
    }
    return result
}

const employeeIncludesQuery = (employee, query) => {
    let result = true
    if (!employeeIncludesQueryField(employee, query, "nameFirst")) {
        result = false
    }
    if (!employeeIncludesQueryField(employee, query, "nameLast")) {
        result = false
    }
    if (!employeeIncludesQueryField(employee, query, "department")) {
        result = false
    }
    if (!employeeIncludesQueryField(employee, query, "email")) {
        result = false
    }
    if (!employeeIncludesQueryField(employee, query, "phone")) {
        result = false
    }
    if (!employeeIncludesQueryField(employee, query, "employeeID")) {
        result = false
    }
    return result
}

module.exports.employeesGet = (query) => {
    const result = []
    employees.forEach(e => {
        if (employeeIncludesQuery(e, query)) {
            result.push(e)
        }
    })

    return result
}

const NumOfIDDigits = 12
const employeeIDGetRandom = () => {
    const id = Math.floor(Math.random() * Math.pow(10, NumOfIDDigits))
    let result = id.toString()
    while (result.length < NumOfIDDigits) {
        result = "0" + result
    }
    return result
}

module.exports.employeesAdd = (newEmployee) => {
    newEmployee.employeeID = employeeIDGetRandom()
    employees.push(newEmployee)
}

module.exports.employeeDelete = (employeeID) => {
    let result = false
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].employeeID === employeeID) {
            employees.splice(i, 1)
            i = employees.length
            result = true
        }
    }
    return result
}