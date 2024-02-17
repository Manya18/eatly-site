import { useEffect } from "react";
import StyledSpan from "../../atoms/spanTypeViolet/SpanTypeViolet";
import TitleTypeSecondary from "../../atoms/titleTypeSecondary/TitleTypeSecondary";
import ColumnTemplate from "../../templates/columnTemplate/ColumnTemplate";
import Layout from "../../templates/layout/Layout";

import styles from "./blogPage.module.css";
import BlogCardGroup from "../../organisms/blogCardGroup/BlogCardGroup";
import ButtonTypeHidden from "../../atoms/buttonTypeHidden/ButtonTypeHidden";
import BackArrow from "../../../assets/images/pages/BackArrow.svg";
import ForwardArrow from "../../../assets/images/pages/ForwardArrow.svg";

const BlogPage = () => {
  useEffect(() => {
    const fetchLunch = async () => {
      fetch("https://dummyjson.com/posts")
        .then((res) => res.json())
        .then(console.log);
    };

    fetchLunch();
  }, []);

  return (
    <Layout>
      <ColumnTemplate>
        <TitleTypeSecondary>
          Latest <StyledSpan>Articles</StyledSpan>
        </TitleTypeSecondary>
        <BlogCardGroup />
        <div className={styles.buttonGroup}>
        <ButtonTypeHidden onClick={() => {}}>
            <img src={ForwardArrow} alt="Forward Arrow" loading="lazy" />
          </ButtonTypeHidden>
          <ButtonTypeHidden onClick={() => {}}>
            <img src={BackArrow} alt="Back Arrow" loading="lazy" />
          </ButtonTypeHidden>
        </div>
      </ColumnTemplate>
    </Layout>
  );
};

export default BlogPage;
