const employees = []

module.exports.employeesAdd = (newEmployee) => {
    employees.push(newEmployee)
}

/*
    nameFirst:  e.name.first,
    nameLast:   e.name.last,
    department: departmentGetRandom(),
    email:      e.email,
    phone:      e.phone,
    picture:    e.picture.large,
    id:         employeeIDGetRandom()
*/

module.exports.employeesGet = (query) => {
    console.log(query)
    const result = []
    employees.forEach(e => {
        let include = true
        if (query.namefirst && !e.nameFirst.includes(query.namefirst)) {
            include = false
        }
        if (query.namelast && !e.nameLast.includes(query.namelast)) {
            include = false
        }
        if (query.department && !e.department.includes(query.department)) {
            include = false
        }
        if (query.email && !e.email.includes(query.email)) {
            include = false
        }
        if (query.phone && !e.phone.includes(query.phone)) {
            include = false
        }
        if (query.employeeid && !e.id.includes(query.employeeid)) {
            include = false
        }
        if (include) {
            result.push(e)
        }
    })

    return result
}