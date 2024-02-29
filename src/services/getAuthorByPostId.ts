import { useState, useEffect } from "react";
import { AuthorProps } from "../types/APItypes/AuthorProps";

const GetAuthorByPostId = (id: string) => {
    const [author, setAuthor] = useState<AuthorProps>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>(null);
  
    useEffect(() => {
      const getData = async () => {
        setLoading(true);
        try {
          const response = await fetch(
            `https://dummyjson.com/users/${id}`
          );
          const res = await response.json();
          setAuthor(res);
        } catch (error) {
          setError(error);
        }
        setLoading(false);
      };
  
      getData();
    }, []);
    return { author, loading, error };
  
}

export default GetAuthorByPostId;