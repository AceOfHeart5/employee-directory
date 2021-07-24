import React from 'react'

const Employee = ({ employee, serverUrl, refreshEmployees }) => {
    const fullName = `${employee.nameFirst} ${employee.nameLast}`

    const deleteEmployee = async (employeeID) => {
		const options = {
			method:		'DELETE',
			headers:	{
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			},
			body: new URLSearchParams({ employeeID:	employeeID })
		}
		await fetch(serverUrl+`delete`, options)
		refreshEmployees('delete')
	}

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
