import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/users'

export const getUsers = (url:any) => {
    axios.get(url)
    .then(response => response.data)
    .catch((error)=> console.log(error));
}