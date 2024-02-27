import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import { useGetAllPostsQuery } from "../../../redux/features/api/fetch.api";

import StyledSpan from "../../atoms/spanTypeViolet/SpanTypeViolet";
import TitleTypeSecondary from "../../atoms/titleTypeSecondary/TitleTypeSecondary";
import ColumnTemplate from "../../templates/columnTemplate/ColumnTemplate";
import Layout from "../../templates/layout/Layout";
import PostsGrid from "../../organisms/postsGrid/PostsGrid";
import PaginationButtons from "../../molecules/paginationButtons/PaginationButtons";
import PostsGridSkeleton from "../../organisms/postsGridSkeleton/PostsGridSkeleton";

const BlogPage = () => {
  const page = useSelector((state: RootState) => state.currentPage.page);
  const { data: postsData, isLoading } = useGetAllPostsQuery(page);

  return (
    <Layout>
      <ColumnTemplate>
        <TitleTypeSecondary>
          Latest <StyledSpan>Articles</StyledSpan>
        </TitleTypeSecondary>
        {isLoading ? (
          <PostsGridSkeleton />
        ) : (
          <PostsGrid data={postsData?.posts || []} />
        )}
        <PaginationButtons limit={postsData?.total || 0} />
      </ColumnTemplate>
    </Layout>
  );
};

export default BlogPage;
