import React, { Dispatch, FC, SetStateAction } from 'react'

type Props = {
    search: string,
    setSearch: Dispatch<SetStateAction<S>>
}

const Search: Props = ({search, setSearch}) => {
    return (
        <>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        </>
    )
}

export default Search
