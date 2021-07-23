const employees = []

module.exports.employeesAdd = (newEmployee) => {
    employees.push(newEmployee)
}

module.exports.employeesGet = () => {
    return employees
}