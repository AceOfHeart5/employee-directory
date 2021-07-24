import { useState, useEffect } from 'react';
import Search from './components/Search';
import EmployeeList from './components/EmployeeList';
import './App.css';

const serverUrl = "http://localhost:3001/"

function App() {
	const [employees, setemployees] = useState([])

	const [searchParams, setSearchParams] = useState({
		nameFirst:	"",
		nameLast:	"",
		department:	"",
		email:		"",
		phone:		"",
		employeeID:	"",
	})

	const searchParamsToString = () => {
		const params = []

		if (searchParams.nameFirst !== "") {
			params.push(`namefirst=${searchParams.nameFirst}`)
		}
		if (searchParams.nameLast !== "") {
			params.push(`namelast=${searchParams.nameLast}`)
		}
		if (searchParams.department !== "") {
			params.push(`department=${searchParams.department}`)
		}
		if (searchParams.email !== "") {
			params.push(`email=${searchParams.email}`)
		}
		if (searchParams.phone !== "") {
			params.push(`phone=${searchParams.phone}`)
		}
		if (searchParams.employeeID !== "") {
			params.push(`employeeid=${searchParams.employeeID}`)
		}

		let result = (params.length > 0) ? "?" : "";

		params.forEach((p, i) => {
			result += p
			if (i < params.length - 1) {
				result += "&"
			}
		})

		return result
	}

	const refreshEmployees = async (msg) => {
		let res = await fetch(serverUrl+`employees${searchParamsToString()}`)
		let data = await res.json()
		
		if (msg) {
			console.log('refresh from: ' + msg)
		}
		setemployees(data)
	}

	const deleteEmployee = async (employeeID) => {
		const options = {
			method:		'DELETE',
			headers:	{
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			},
			body: new URLSearchParams({ employeeID:	employeeID })
		}
		let res = await fetch(serverUrl+`delete`, options)
		await refreshEmployees('delete')
	}

	useEffect(() => {
		refreshEmployees()
			.catch(err => console.log(err))
	}, [])

	useEffect(() => {
		refreshEmployees('search params changed')
			.catch(err => console.log(err))
	}, [searchParams])

	return (
		<div className="App">
			<h1>Employee Directory</h1>
			<Search 
				searchParams={searchParams} 
				setSearchParams={setSearchParams}>
			</Search>
			<EmployeeList 
				employees={employees} 
				deleteEmployee={deleteEmployee}>
			</EmployeeList>
		</div>
	);
}

export default App;
