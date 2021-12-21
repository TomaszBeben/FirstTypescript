import React,{useState, Dispatch, SetStateAction} from 'react'

const Search = () => {
    const [search, setSearch]: [string, Dispatch.SetStateAction<string>] = useState('')
    return (
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
    )
}

export default Search
