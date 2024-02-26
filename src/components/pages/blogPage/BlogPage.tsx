import StyledSpan from "../../atoms/spanTypeViolet/SpanTypeViolet";
import TitleTypeSecondary from "../../atoms/titleTypeSecondary/TitleTypeSecondary";
import ColumnTemplate from "../../templates/columnTemplate/ColumnTemplate";
import Layout from "../../templates/layout/Layout";

import BlogCardGroup from "../../organisms/blogCardGroup/BlogCardGroup";
import { useGetAllPostsQuery } from "../../../redux/features/api/fetch.api";
import PaginationButtons from "../../molecules/paginationButtons/PaginationButtons";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";

const BlogPage = () => {
  const page = useSelector((state: RootState) => state.currentPage.page);
  const { data: postsData } = useGetAllPostsQuery(page);

  return (
    <Layout>
      <ColumnTemplate>
        <TitleTypeSecondary>
          Latest <StyledSpan>Articles</StyledSpan>
        </TitleTypeSecondary>
        <BlogCardGroup data={postsData?.posts || []} />
        <PaginationButtons limit={postsData?.total || 0} />
      </ColumnTemplate>
    </Layout>
  );
};

export default BlogPage;
