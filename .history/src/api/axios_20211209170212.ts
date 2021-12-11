import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/users'

export const getUsers = (url: string) => {
    axios.get(url)
    .then(response => response.data)
    .catch((error)=> console.log(error));
}