import { Skeleton } from "@mui/material";
import { useParams } from "react-router-dom";

import Layout from "../../templates/layout/Layout";
import ColumnTemplate from "../../templates/columnTemplate/ColumnTemplate";
import PostContent from "../../organisms/postContent/PostContent";
import CommentsBlock from "../../organisms/commentsBlock/CommentsBlock";
import GetSinglePost from "../../../services/getPost";
import APIError from "../../atoms/APIError/APIError";

const PostPage = () => {
  const urlParam = useParams();
  const id = urlParam.postId || "1";
  const {post, loading, error} = GetSinglePost(id)

  if (error) {
    return <APIError/>;
  }

  return (
    <Layout>
      <ColumnTemplate>
        {post && <PostContent props={post} />}
        {loading ? (
          <Skeleton variant="rounded" height={170} />
        ) : (
          <CommentsBlock comments={post?.comments.comments!} />
        )}
      </ColumnTemplate>
    </Layout>
  );
};

export default PostPage;
