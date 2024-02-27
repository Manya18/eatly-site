import Layout from "../../templates/layout/Layout";
import ColumnTemplate from "../../templates/columnTemplate/ColumnTemplate";
import PostContent from "../../organisms/postContent/PostContent";
import CommentsBlock from "../../organisms/commentsBlock/CommentsBlock";
import { useGetCommentsByPostIdQuery } from "../../../redux/features/api/fetch.api";
import { Skeleton } from "@mui/material";

const PostPage = () => {
  // получаем данные поста из хранилища
  const currentPostString = sessionStorage.getItem("currentPostData");
  let currentPost = null;
  if (currentPostString !== null) {
    currentPost = JSON.parse(currentPostString);
  }
  const { data: commentsData, isLoading } = useGetCommentsByPostIdQuery(
    currentPost.postContent.id
  );

  return (
    <Layout>
      <ColumnTemplate>
        <PostContent props={currentPost} />
        {isLoading ? (
          <Skeleton variant="rounded" height={170} />
        ) : (
          <CommentsBlock comments={commentsData?.comments || []} />
        )}
      </ColumnTemplate>
    </Layout>
  );
};

export default PostPage;
