import { useEffect, useState } from "react";
import { SinglePostProps } from "../types/APItypes/PostProps";

const GetSinglePost = (id: string) => {
  const [post, setPost] = useState<SinglePostProps>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const urls = [
    `https://dummyjson.com/posts/${id}`,
    `https://dummyjson.com/users/${id}`,
    `https://dummyjson.com/comments/post/${id}`,
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const responses = await Promise.all(urls.map((url) => fetch(url)));
        const jsons = await Promise.all(responses.map((res) => res.json()));
        const [postData, authorData, commentsData] = jsons;
        setPost({
          postContent: postData,
          author: authorData,
          comments: commentsData,
        });
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return { post, loading, error };
};

export default GetSinglePost;
