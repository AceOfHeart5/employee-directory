const employees = []

module.exports.employeesAdd = (newEmployee) => {
    employees.push(newEmployee)
}

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