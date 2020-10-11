import React from 'react'


const SearchBox = ({ searchfield, onSearchChange}) => {
    return (
        <div className="container">
            <input type='search'
                placeholder='Search games'
                onChange={onSearchChange}
            /> 
        </div>  
    )
}


export default SearchBox
