import Layout from "../../templates/layout/Layout";
import ColumnTemplate from "../../templates/columnTemplate/ColumnTemplate";
import PostContent from "../../organisms/postContent/PostContent";
import CommentsBlock from "../../organisms/commentsBlock/CommentsBlock";
import { useParams } from "react-router-dom";
import { useGetCommentsByPostIdQuery } from "../../../redux/features/api/fetch.api";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const PostPage = () => {
  const urlParameters = useParams();
  const id = urlParameters.articleId || "1";
  const { data } = useGetCommentsByPostIdQuery(id);
  const post = useSelector((state: RootState) => state.currentPost);


  return (
    <Layout>
      <ColumnTemplate>
        <PostContent />
        <CommentsBlock comments={data?.comments || []}/>
      </ColumnTemplate>
    </Layout>
  );
};

export default PostPage;
