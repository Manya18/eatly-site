import { useEffect, useState } from "react";
import { CommentsProps } from "../types/APItypes/CommentsProps";

const GetAllComments = (count: number) => {
  const [allComments, setAllComments] = useState<CommentsProps>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://dummyjson.com/comments?limit=${count}`
        );
        const res = await response.json();
        setAllComments(res);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    getData();
  }, [count]);
  return { allComments, loading, error };
};

export default GetAllComments;
