import Layout from "../../templates/layout/Layout";
import ColumnTemplate from "../../templates/columnTemplate/ColumnTemplate";
import Article from "../../organisms/article/Article";
import CommentsBlock from "../../organisms/commentsBlock/CommentsBlock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICommentsProps } from "../../../types/APItypes/CommentsProps";

const ArticlePage = () => {
  const urlParameters = useParams();


  const [comments, setComments] = useState<ICommentsProps[]>([
    {
      id: 0,
      body: "",
      postId: 0,
      user: {
        id: 0,
        username: '',
      }
    },
  ]);


  useEffect(() => {
    const fetchComments = async () => {
      const responce = await fetch(
        `https://dummyjson.com/comments/post/${urlParameters.articleId}`
      );
      const commentsOfPost = await responce.json();
      setComments(commentsOfPost.comments)
    };

    fetchComments();
  }, []);

  return (
    <Layout>
      <ColumnTemplate>
        <Article />
        <CommentsBlock comments={comments} />
      </ColumnTemplate>
    </Layout>
  );
};

export default ArticlePage;
