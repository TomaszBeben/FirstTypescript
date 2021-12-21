import axios from 'axios';


const URL: string = 'https://jsonplaceholder.typicode.com/users';

export const fetchData = () => {
    axios
        .get(URL)
        .then(res => {
            console.log(res.data);
            return res.data
        })
        .catch(err => {
            const error = err.res.status === 404
            ?  "Resource Not found"
            : "An unexpected error has occurred";
            return error
        })
}