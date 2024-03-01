import { HashLink } from "react-router-hash-link";

import { IPostProps } from "../../../types/APItypes/PostProps";
import StyledSpan from "../../atoms/spanTypeViolet/SpanTypeViolet";
import UserHeader from "../userHeader/UserHeader";
import TagsGroup from "../tagsGroup/TagsGroup";
import styles from "./postCard.module.css";
import GetAuthorByPostId from "../../../services/getAuthorByPostId";

export const sliceToThreeRows = (body: string) => {
  const lenght = 36 * 3 - 3;
  body = body.slice(0, lenght);
  body = body.slice(0, body.lastIndexOf(" "));
  body += "...";

  return body;
}

const PostCard = ({ postData }: { postData: IPostProps }) => {
  const {author} = GetAuthorByPostId(postData.id.toString())

  return (
    <HashLink
      to={`../post/${postData.id}#`}
      key={postData.id.toString()}
      className={styles.card}
    >
      <div className={styles.title}>{postData.title}</div>
      <div className={styles.headerTagsGroup}>
        <div className={styles.addons}>
          {author && <UserHeader author={author} />}
          <div className={styles.reactions}>
            {postData?.reactions} <StyledSpan>&#9733;</StyledSpan>
          </div>
        </div>
        <TagsGroup props={postData.tags} />
      </div>
      <p className={styles.body}>{sliceToThreeRows(postData.body)}</p>
    </HashLink>
  );
};

export default PostCard;
