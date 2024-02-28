import { Skeleton } from "@mui/material";
import { useParams } from "react-router-dom";

import Layout from "../../templates/layout/Layout";
import ColumnTemplate from "../../templates/columnTemplate/ColumnTemplate";
import PostContent from "../../organisms/postContent/PostContent";
import CommentsBlock from "../../organisms/commentsBlock/CommentsBlock";
import { useGetCommentsByPostIdQuery } from "../../../redux/features/api/fetch.api";

const PostPage = () => {
  const urlParam = useParams();
  const id = urlParam.postId || "1";

  // получаем данные поста из хранилища
  const currentPostString = sessionStorage.getItem("currentPostData");
  let currentPost = null;
  if (currentPostString !== null) {
    currentPost = JSON.parse(currentPostString);

    // проверка на совпадение id
    if (
      currentPost !== undefined &&
      id !== currentPost.postContent.id.toString()
    ) {
      console.log("id is wrong!");
    }
  }

  const { data: commentsData, isLoading } = useGetCommentsByPostIdQuery(
    currentPost?.postContent.id.toString() || "1"
  );

  return (
    <Layout>
      <ColumnTemplate>
        <PostContent props={currentPost!} />
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
