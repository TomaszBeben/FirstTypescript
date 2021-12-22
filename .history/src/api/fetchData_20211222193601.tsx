import axios from "axios";
import { TUser } from '../types/TUser'

const url: string = 'https://jsonplaceholder.typicode.com/users';

export const fetchData = () => {
    axios.get < TUser[] > (url)
        .then(({ data }) => {
            setUser(data)
            setError('')
        }).catch((err) => {
            err.response.status === 404
                ? setError('resources not found')
                : setError('')
        })
}