import React from 'react'

function Search({ searchParams, setSearchParams }) {

    const searchField = (placeholder, fieldName) => {
        return (
            <input type="text" value={searchParams[fieldName]} 
                placeholder={placeholder} 
                onChange={e => {
                    const temp = { ...searchParams }
                    temp[fieldName] = e.target.value
                    setSearchParams(temp)
                }}/>
        )
    }

    return (
        <div>
            <h5>Search</h5>
            {searchField("first name", "nameFirst")}
            {searchField("last name", "nameLast")}
            {searchField("department", "department")}
            {searchField("email", "email")}
            {searchField("phone number", "phone")}
            {searchField("employee id", "employeeID")}
        </div>
    )
}

export default Search
