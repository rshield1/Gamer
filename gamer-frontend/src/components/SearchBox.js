import React from 'react'


const SearchBox = ({onSearchChange}) => {

    return (
        <div className="container">
                <br/>
        <label><h4>Search</h4></label>
            <input type='text'
                className="form-control text-center"
                placeholder='Search games.. example type "Devil May Cry"'
                name="search"
                onChange={onSearchChange}                
            />
        </div>  
    )
}


export default SearchBox
