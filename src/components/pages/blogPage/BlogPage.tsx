import StyledSpan from "../../atoms/spanTypeViolet/SpanTypeViolet";
import TitleTypeSecondary from "../../atoms/titleTypeSecondary/TitleTypeSecondary";
import ColumnTemplate from "../../templates/columnTemplate/ColumnTemplate";
import Layout from "../../templates/layout/Layout";
import PostsGrid from "../../organisms/postsGrid/PostsGrid";
import PaginationButtons from "../../molecules/paginationButtons/PaginationButtons";
import PostsGridSkeleton from "../../organisms/postsGridSkeleton/PostsGridSkeleton";
import GetAllPosts from "../../../services/getAllPosts";
import APIError from "../../atoms/APIError/APIError";

const BlogPage = () => {
  // паттерн Lifting State Up
  const {allPosts, loading, error} = GetAllPosts();

  if (error) {
    return <APIError/>;
  }
  return (
    <Layout>
      <ColumnTemplate>
        <TitleTypeSecondary>
          Latest <StyledSpan>Articles</StyledSpan>
        </TitleTypeSecondary>
        {loading ? (
          <PostsGridSkeleton />
        ) : (
          <PostsGrid data={allPosts?.posts || []} />
        )}
        <PaginationButtons limit={allPosts?.total || 0} />
      </ColumnTemplate>
    </Layout>
  );
};

export default BlogPage;
