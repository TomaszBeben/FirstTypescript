import axios from 'axios';

export type TPosts = {
    id: number;
    name: string;
    username: string;
};

const URL: string = 'https://jsonplaceholder.typicode.com/users';

export const fetchData = (setPosts: (arg0: TPosts[]) => void, setLoading: (arg0: boolean) => void, setError: (arg0: string) => void) => {
    axios
        .get<TPosts[]>(URL)
        .then(res => {
            return res.data
        })
        .catch(err => {
            const error = err.res.status === 404
            ?  "Resource Not found"
            : "An unexpected error has occurred";
            return error
        })
}