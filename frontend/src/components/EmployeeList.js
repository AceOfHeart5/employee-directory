import React from 'react'
import Employee from './Employee'

function EmployeeList({ employees }) {

    const listMake = () => {
        return (
            <ul>{
                employees.map(e => {
                    return <Employee employee={e} key={e.id}></Employee>
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
