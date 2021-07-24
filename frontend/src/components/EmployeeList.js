import React from 'react'
import Employee from './Employee'

function EmployeeList({ employees, deleteEmployee }) {

    const listMake = () => {
        return (
            <ul>{
                employees.map(e => {
                    return <Employee 
                            employee={e} 
                            deleteEmployee={deleteEmployee} 
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
