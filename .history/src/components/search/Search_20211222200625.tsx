import React, { FC } from 'react'

type Props = {
    search: string,
    setSearch: 
}

const Search: FC = ({search, setSearch}) => {
    return (
        <>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        </>
    )
}

export default Search
