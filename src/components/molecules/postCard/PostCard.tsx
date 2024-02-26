import { IPostProps } from "../../../types/APItypes/PostProps";
import StyledSpan from "../../atoms/spanTypeViolet/SpanTypeViolet";
import UserHeader from "../userHeader/UserHeader";
import TagsGroup from "../tagsGroup/TagsGroup";
import { useDispatch } from "react-redux";
import styles from "./postCard.module.css";
import { HashLink } from "react-router-hash-link";

const PostCard = ({ postData }: { postData: IPostProps }) => {

  // const dispatch = useDispatch();

  const lenght = 36 * 3 - 3;
  let text = postData.body;
  text = text.slice(0, lenght);
  text = text.slice(0, text.lastIndexOf(" "));
  text += "...";
  // const putPostData = () => {
  //   dispatch()
  // }

  return (
    <HashLink
      to={`../article/${postData.id}#`}
      key={postData.id.toString()}
      className={styles.card}
      // onClick={putPostData()}
    >
      <div className={styles.title}>{postData.title}</div>
      <div className={styles.headerTagsGroup}>
        <div className={styles.addons}>
          <UserHeader id={postData.id.toString()} />
          <div className={styles.reactions}>
            {postData?.reactions} <StyledSpan>&#9733;</StyledSpan>
          </div>
        </div>
        <TagsGroup props={postData.tags} />
      </div>
      <p className={styles.body}>{text}</p>
    </HashLink>
  );
};

export default PostCard;
