import React, { FC } from 'react'

type TSearchBar = {
    searchInput: string
}

const SearchBar: FC<TSearchBar> = ({searchInput}) => {
    return (
        <input type="text" />
    )
}

export default SearchBar
