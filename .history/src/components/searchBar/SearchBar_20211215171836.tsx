import React, { FC } from 'react'

type TSearchBar = {
    searchInput: string
}

const SearchBar: FC<TSearchBar> = () => {
    return (
        <input type="text" />
    )
}

export default SearchBar
