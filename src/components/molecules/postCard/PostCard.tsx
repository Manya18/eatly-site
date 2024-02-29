import { HashLink } from "react-router-hash-link";

import { IPostProps } from "../../../types/APItypes/PostProps";
import StyledSpan from "../../atoms/spanTypeViolet/SpanTypeViolet";
import UserHeader from "../userHeader/UserHeader";
import TagsGroup from "../tagsGroup/TagsGroup";
import styles from "./postCard.module.css";
// import { useGetAuthorQuery } from "../../../redux/features/api/fetch.api";
import GetAuthorByPostId from "../../../services/getAuthorByPostId";
// import { useDispatch } from "react-redux";
// import { setPost } from "../../../redux/features/slices/currentPostSlice";

const PostCard = ({ postData }: { postData: IPostProps }) => {
  // const { data: authorInfo } = useGetAuthorQuery(postData.id.toString());
  // const dispatch = useDispatch();
  const {author} = GetAuthorByPostId(postData.id.toString())

  const lenght = 36 * 3 - 3;
  let text = postData.body;
  text = text.slice(0, lenght);
  text = text.slice(0, text.lastIndexOf(" "));
  text += "...";

  // const dispatchPost = () => {
  //   // dispatch(setPost({ postContent: postData, author: author, comments: null }))
  //   localStorage.setItem(
  //     "currentPostData",
  //     JSON.stringify({ postContent: postData, author: author, comments: null })
  //   );
  // };

  return (
    <HashLink
      to={`../post/${postData.id}#`}
      key={postData.id.toString()}
      className={styles.card}
      // onClick={() => dispatchPost()}
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
      <p className={styles.body}>{text}</p>
    </HashLink>
  );
};

export default PostCard;
