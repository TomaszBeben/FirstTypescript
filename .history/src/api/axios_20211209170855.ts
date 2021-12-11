import axios from 'axios'

type url:{
   URL = 'https://jsonplaceholder.typicode.com/users'
}

export const getUsers = () => {
    axios.get(url)
    .then(response => response.data)
    .catch((error)=> console.log(error));
}