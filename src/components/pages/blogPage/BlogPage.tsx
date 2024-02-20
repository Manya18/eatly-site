import { useEffect, useState } from "react";
import StyledSpan from "../../atoms/spanTypeViolet/SpanTypeViolet";
import TitleTypeSecondary from "../../atoms/titleTypeSecondary/TitleTypeSecondary";
import ColumnTemplate from "../../templates/columnTemplate/ColumnTemplate";
import Layout from "../../templates/layout/Layout";

import styles from "./blogPage.module.css";
import BlogCardGroup from "../../organisms/blogCardGroup/BlogCardGroup";
import ButtonTypeHidden from "../../atoms/buttonTypeHidden/ButtonTypeHidden";
import AbleArrow from "../../../assets/images/pages/BackArrow.svg";
import DisableArrow from "../../../assets/images/pages/ForwardArrow.svg";
import { IPostProps } from "../../../types/APItypes/PostProps";

const POSTS_ON_PAGE = 12;

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
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(0);

  const [posts, setPosts] = useState<IPostProps[]>(data);
  const fetchComments = async () => {
    const responce = await fetch(
      `https://dummyjson.com/posts?limit=12&skip=${page * POSTS_ON_PAGE}`
    );
    const posts = await responce.json();
    setLimit(posts.total);
    setPosts(posts.posts);
  };
  useEffect(() => {
    fetchComments();
  }, []);

  const openBackPage = () => {
    setPage(page - 1);
    console.log(page);
    fetchComments();
  };

  const openForwardPage = () => {
    setPage(page + 1);
    console.log(page);
    fetchComments();
  };

  return (
    <Layout>
      <ColumnTemplate>
        <TitleTypeSecondary>
          Latest <StyledSpan>Articles</StyledSpan>
        </TitleTypeSecondary>
        <BlogCardGroup data={posts} />
        <div className={styles.buttonGroup}>
          {page <= 0 ? (
            <ButtonTypeHidden onClick={openBackPage} disabled={true}>
              <img src={DisableArrow} alt="Back Arrow" loading="lazy" />
            </ButtonTypeHidden>
          ) : (
            <ButtonTypeHidden onClick={openBackPage}>
              <img
                src={AbleArrow}
                className={styles.reverseArrow}
                alt="Back Arrow"
                loading="lazy"
              />
            </ButtonTypeHidden>
          )}

          {page >= limit / 12 - 1 ? (
            <ButtonTypeHidden onClick={openForwardPage} disabled={true}>
              <img
                src={DisableArrow}
                className={styles.reverseArrow}
                alt="Forward Arrow"
                loading="lazy"
              />
            </ButtonTypeHidden>
          ) : (
            <ButtonTypeHidden onClick={openForwardPage}>
              <img src={AbleArrow} alt="Forward Arrow" loading="lazy" />
            </ButtonTypeHidden>
          )}
        </div>
      </ColumnTemplate>
    </Layout>
  );
};

export default BlogPage;
