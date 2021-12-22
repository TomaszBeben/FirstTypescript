import axios from "axios";
import { TUser } from '../types/TUser'

const url: string = 'https://jsonplaceholder.typicode.com/users';

export const fetchData = (setUsers, setError) => {
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