import React from 'react'

/*
    nameFirst:  e.name.first,
    nameLast:   e.name.last,
    department: departmentGetRandom(),
    email:      e.email,
    phone:      e.phone,
    picture:    e.picture.large,
    id:         employeeIDGetRandom()
*/

const Employee = ({ employee }) => {
    const fullName = `${employee.nameFirst} ${employee.nameLast}`

    return (
        <div>
            <h3>{fullName}</h3>
            <img src={employee.picture} alt={fullName} />
            <div>{`Department: ${employee.department}`}</div>
            <div>{`Email: ${employee.email}`}</div>
            <div>{`Phone: ${employee.phone}`}</div>
            <div>{`Employee ID: ${employee.id}`}</div>
        </div>
    )
}

export default Employee
