import React, { FC } from 'react'

type TSearchBar = {
    search: string;
    setSearch: (search: string) => void;
}

const SearchBar: FC<TSearchBar> = ({search, setSearch}) => {
    return (
        <input type="text" />
    )
}

export default SearchBar
