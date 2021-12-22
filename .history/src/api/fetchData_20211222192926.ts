import axios from "axios";
import {TUser} from '../App'

const url = 'https://jsonplaceholder.typicode.com/users';

const fetchData = () => {
    axios.get <TUser[]> (url)
    .then(({data}) => {
        setUser(data)
        setError('')
    } )
}
    







//     axios.get < TUser[] > (url)
    //   .then(({ data }) => {
    //     setUsers(data)
    //     setError('')
    //   })
    //   .catch((err) => {
    //     err.response.status === 404
    //     ? setError('resources not found')
    //     : setError('')
    //   })}