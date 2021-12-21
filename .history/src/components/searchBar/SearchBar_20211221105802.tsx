import React, { FC } from 'react'

const SearchBar = () => {

    return (
        <input type="text" onChange={event => setSearch(event.target.value)} />
    )
}

export default SearchBar
