import React, { FC } from 'react'

const Search: FC = ({search, setSearch}) => {
    return (
        <>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        </>
    )
}

export default Search
