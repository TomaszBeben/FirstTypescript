import axios from "axios";
import { TUser } from '../types/TUser'

const url: string = 'https://jsonplaceholder.typicode.com/users';

export const fetchData = ((posts: TUser[]) => void, (error) => {
    axios.get(url)
        .then(({ data }) => {
            setUsers(data)
            setError('')
        }).catch((err) => {
            err.response.status === 404
                ? setError('resources not found')
                : setError('')
        })
}