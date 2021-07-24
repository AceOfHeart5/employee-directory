import React from 'react'
import Employee from './Employee'

function EmployeeList({ employees, serverUrl, refreshEmployees }) {

    const listMake = () => {
        return (
            <ul>{
                employees.map(e => {
                    return <Employee 
                            employee={e} 
                            serverUrl={serverUrl}
                            refreshEmployees={refreshEmployees}
                            key={e.employeeID}>    
                        </Employee>
                })
            }</ul>
        )
    }

    return (
        <div>
            {listMake()}
        </div>
    )
}

export default EmployeeList
