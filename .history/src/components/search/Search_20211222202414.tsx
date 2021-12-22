import React, { FC, Dispatch, SetStateAction } from 'react'

type props = {
    search: string,
    setSearch: Dispatch<SetStateAction<S>>
}

const Search: FC<props> = ({search, setSearch}) => {
    return (
        <>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        </>
    )
}

export default Search
