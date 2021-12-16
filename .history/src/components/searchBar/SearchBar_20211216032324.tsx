import React, { FC, useState } from 'react'

type TSearchBar = {
    search: string;
    setSearch: (search: string) => void;
}

// const SearchBar: FC<TSearchBar> = ({search, setSearch}) => {
const SearchBar = () => {
    const [search, setSearch] = useState('')
    console.log(search);

    return (
        <input type="text" value={setSearch(e => e.target.value)} />
    )
}

export default SearchBar
