import Layout from "../../templates/layout/Layout";
import ColumnTemplate from "../../templates/columnTemplate/ColumnTemplate";
import Post from "../../organisms/post/Post";
import CommentsBlock from "../../organisms/commentsBlock/CommentsBlock";

const ArticlePage = () => {
  return (
    <Layout>
      <ColumnTemplate>
        <Post />
        <CommentsBlock />
      </ColumnTemplate>
    </Layout>
  );
};

export default ArticlePage;
