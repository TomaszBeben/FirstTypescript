import React, { useState } from 'react'

const Search = () => {
    const [search, setSearch]: [string, (search: string) => void] = useState('')
    return (
        <>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        </>
    )
}

export default Search
