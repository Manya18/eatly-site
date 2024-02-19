import { CommentsProps } from "../../../types/APItypes/CommentsProps";
import FeedbackCard from "../../molecules/feedbackCard/FeedbackCard";
import styles from "./commentsBlock.module.css"

const CommentsBlock : React.FC<CommentsProps> = ({comments}) => {
    console.log(comments)
    return ( 
        <div className={styles.commentsBlock}>
            <span className={styles.title}>Comments</span>
            {comments.map((comm) => (
                <div key={comm.id} className={styles.commentsGroup}>
            <FeedbackCard personName={comm.user.username} quote={comm.body} id={comm.id} />
            </div>
            ))}
        </div>
     );
}
 
export default CommentsBlock;