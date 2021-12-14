import { TPosts } from "../../api/fetchData";

export type ListProps = {
    posts: TPosts[];
    setPosts?: (posts: TPosts[]) => void;
    loading?:boolean;
    setLoading?: (loading: boolean) => void
    error: string;
    setError?: (error: string) => void
}