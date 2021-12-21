import React, { useState } from 'react'

const Search = () => {
    const [search, setSearch] = useState<string>('')
    return (
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
    )
}

export default Search
