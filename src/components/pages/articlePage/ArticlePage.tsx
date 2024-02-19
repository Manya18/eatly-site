import Layout from "../../templates/layout/Layout";
import styles from "./articlePage.module.css";
import ColumnTemplate from "../../templates/columnTemplate/ColumnTemplate";
import Article from "../../molecules/article/Article";

const ArticlePage = () => {
  
  return (
    <Layout>
      <ColumnTemplate>
      <Article/>
      </ColumnTemplate>
    </Layout>
  );
};

export default ArticlePage;
