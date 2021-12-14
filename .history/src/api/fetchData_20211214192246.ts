

export const fetchData = () => {
    axios
        .get<Posts[]>('https://jsonplaceholder.typicode.com/users')
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