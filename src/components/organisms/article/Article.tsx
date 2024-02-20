import styles from "./article.module.css";
import arrow from "../../../assets/images/molecules/arrow-right.svg";
import StyledSpan from "../../atoms/spanTypeViolet/SpanTypeViolet";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPostProps } from "../../../types/APItypes/PostProps";
import { Link } from "react-router-dom";

const Article = () => {
  const [articleInfo, setArticleInfo] = useState<IPostProps>(
    {
      id: 0,
      title: "",
      tags: [""],
      reactions: 0,
      body: "",
      userId: 1,
    },
  );

  const [author, setAuthor] = useState(
    {
      name: "",
      image: "",
    },
  );

  const urlParameters = useParams();

  useEffect(() => {
    const fetchComments = async () => {
      const responce = await fetch(
        `https://dummyjson.com/posts/${urlParameters.articleId}`
      );
      const post = await responce.json();
      setArticleInfo(post)

      const responceAuthor = await fetch(`https://dummyjson.com/users/${articleInfo.userId}`);
      const authorInfo = await responceAuthor.json();
      setAuthor({name: authorInfo.firstName +" " + authorInfo.lastName, image: authorInfo.image})
    };

    fetchComments();
  });

  return (
    <div key={articleInfo.id} className={styles.article}>
      <div className={styles.title}>{articleInfo.title}</div>
      <div className={styles.infoGroup}>
        <div className={styles.authorCard}>
          <img className={styles.authorImg} src={author.image} alt="avatar" loading="lazy" width="55px"/>
          <div className={styles.textGroup}>
            <div className={styles.writtenBy}>Written By</div>
            <div className={styles.authorName}>{author.name}</div>
          </div>
        </div>
        <div className={styles.addons}>
          <div className={styles.reactions}>
          {articleInfo.reactions} <StyledSpan>&#9733;</StyledSpan>
          </div>
          <div className={styles.tags}>
            {articleInfo.tags.map((tag: string) => (
              <span key={tag}>{"#" + tag} </span>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.body}>{articleInfo.body}</div>
      <Link to='/blog' className={styles.backLink}>
        <img src={arrow} alt="back" />
        <label>All Articles</label>
      </Link>

    </div>
  );
};

export default Article;
