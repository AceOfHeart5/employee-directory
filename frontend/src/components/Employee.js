import React from 'react'

const Employee = ({ employee, deleteEmployee }) => {
    const fullName = `${employee.nameFirst} ${employee.nameLast}`

    return (
        <div className="Employee">
            <h3>{fullName}</h3>
            <img src={employee.picture} alt={fullName} />
            <div>{`Department: ${employee.department}`}</div>
            <div>{`Email: ${employee.email}`}</div>
            <div>{`Phone: ${employee.phone}`}</div>
            <div>{`Employee ID: ${employee.employeeID}`}</div>
            <button onClick={() => deleteEmployee(employee.employeeID)}>Delete</button>
        </div>
    )
}

export default Employee
