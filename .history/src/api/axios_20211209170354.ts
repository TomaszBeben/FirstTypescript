import axios from 'axios'
import { FC } from 'react'

type url = {
    url: 
}'https://jsonplaceholder.typicode.com/users'

export const getUsers:FC<url> = (url: string) => {
    axios.get(url)
    .then(response => response.data)
    .catch((error)=> console.log(error));
}