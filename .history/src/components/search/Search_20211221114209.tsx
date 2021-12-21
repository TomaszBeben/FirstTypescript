import React, { useState } from 'react'

const Search = () => {
    const [search, setSearch]: [string, (search: string) => void] = useState('')
    return (
        <>
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
            <div style={{ width:'50px', height: '10px', border: '1px solid black' }}>
                {search}
            </div>
        </>
    )
}

export default Search
