import React from 'react'

function Search({ searchParams, setSearchParams }) {

    return (
        <div>
            <h5>Search</h5>
            <input type="text" 
                value={searchParams.nameFirst}
                placeholder="first name" 
                onChange={e => setSearchParams({ nameFirst: e.target.value })}/>
            <input type="text" placeholder="last name"/>
            <input type="text" placeholder="department"/>
            <input type="text" placeholder="email"/>
            <input type="text" placeholder="phone number"/>
            <input type="text" placeholder="employee id"/>
        </div>
    )
}

export default Search
