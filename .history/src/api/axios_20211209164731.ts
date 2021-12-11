import axios from 'axios'

export const getUsers = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response =>{
        return response.data
    }))
    .catch((error)=> console.log(error));
}

// https://jsonplaceholder.typicode.com/users