import axios from 'axios';

export type Posts = {
    id: number;
    name: String;
    username: String;
};

const URL: string = 'https://jsonplaceholder.typicode.com/user4s'

export const fetchData = (setPosts: (arg0: Posts[]) => void, setLoading: (arg0: boolean) => void, setError: (arg0: string) => void) => {
    axios
        .get<Posts[]!>(URL)
        .then(res => {
            setPosts(res.data);
            setLoading(false);
        })
        .catch(err => {
            const error = err.res.status === 404
            ?  "Resource Not found"
            : "An unexpected error has occurred";
            setError(error);
            setLoading(false)
        })
}