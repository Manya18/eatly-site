import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { PostProps } from "../types/APItypes/PostProps";

const GetAllPosts = () => {
  const [allPosts, setAllPosts] = useState<PostProps>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const page = useSelector((state: RootState) => state.currentPage.page);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://dummyjson.com/posts?limit=12&skip=${page * 12}`
        );
        const res = await response.json();
        setAllPosts(res);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    getData();
  }, [page]);
  return { allPosts, loading, error };
};

export default GetAllPosts;
