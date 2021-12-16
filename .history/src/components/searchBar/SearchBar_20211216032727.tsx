import React, { FC, useState } from 'react'

type TSearchBar = {
    search: string;
    setSearch: (search: string) => void;
}

const SearchBar: FC<TSearchBar> = ({search, setSearch}) => {
    console.log(search);

    return (
        <input type="text" onChange={event => setSearch(event.target.value)} />
    )
}

export default SearchBar
