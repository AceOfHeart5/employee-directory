import React, { useState } from 'react'

function EmployeeCreate({ serverUrl, refreshEmployees }) {

    const [nameFirst, setNameFirst] = useState('')
    const [nameLast, setNameLast] = useState('')
    const [department, setDepartment] = useState('')
    const [picUrl, setPicUrl] = useState('')
    
    const createEmployee = async e => {
        e.preventDefault()
		const options = {
			method:		'POST',
			headers:	{
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			},
			body: new URLSearchParams({ 'data': "I'm the data!" })
		}
		let res = await fetch(serverUrl+`add`, options)
        res = await res.json()
        console.log(res)
		refreshEmployees('add')
	}

    return (
        <div>
            <h5>Add Employee</h5>
            <form onSubmit={createEmployee} action="">
                <input 
                    type="text" 
                    placeholder='first name'
                    value={nameFirst} 
                    onChange={e => setNameFirst(e.target.value)}/>
                <input 
                    type="text" 
                    placeholder='last name'
                    value={nameLast}
                    onChange={e => setNameLast(e.target.value)}/>
                <input 
                    type="text" 
                    placeholder='department'
                    value={department}
                    onChange={e => setDepartment(e.target.value)}/>
                <input 
                    type="text" 
                    placeholder='image link'
                    value={picUrl}
                    onChange={e => setPicUrl(e.target.value)}/>
                <button type='submit'>Create Employee</button>
            </form>
        </div>
    )
}

export default EmployeeCreate
