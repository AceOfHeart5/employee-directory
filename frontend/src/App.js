import { useState, useEffect } from 'react';
import EmployeeList from './components/EmployeeList';
import './App.css';

const serverUrl = "http://localhost:3001/"

function App() {
	const [employees, setemployees] = useState([])

	const refreshEmployees = async () => {
		let res = await fetch(serverUrl+'employees')
		let data = await res.json()
		console.log('employees refreshed')
		setemployees(data)
	}

	useEffect(() => {
		refreshEmployees()
			.catch(err => console.log(err))
	}, [])

	return (
		<div className="App">
			<h1>Employee Directory</h1>
			<EmployeeList employees={employees}></EmployeeList>
		</div>
	);
}

export default App;
