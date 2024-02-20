import StyledSpan from "../../atoms/spanTypeViolet/SpanTypeViolet";
import TitleTypeSecondary from "../../atoms/titleTypeSecondary/TitleTypeSecondary";
import ColumnTemplate from "../../templates/columnTemplate/ColumnTemplate";
import Layout from "../../templates/layout/Layout";

import BlogCardGroup from "../../organisms/blogCardGroup/BlogCardGroup";
import { IPostProps } from "../../../types/APItypes/PostProps";
import { useGetAllPostsQuery } from "../../../redux/features/api/fetch.api";
import PaginationButtons from "../../molecules/paginationButtons/PaginationButtons";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";

const data: IPostProps[] = [
  {
    id: 1,
    title: "His mother had always taught him",
    tags: ["history", "american", "crime"],
    reactions: 2,
    body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    userId: 0,
  },
];

const BlogPage = () => {
  const page = useSelector((state: RootState) => state.currentPage.page);
  const { data: postsData } = useGetAllPostsQuery(page);

  return (
    <Layout>
      <ColumnTemplate>
        <TitleTypeSecondary>
          Latest <StyledSpan>Articles</StyledSpan>
        </TitleTypeSecondary>
        <BlogCardGroup data={postsData?.posts || data} />
        <PaginationButtons limit={postsData?.total || 0} />
      </ColumnTemplate>
    </Layout>
  );
};

export default BlogPage;
