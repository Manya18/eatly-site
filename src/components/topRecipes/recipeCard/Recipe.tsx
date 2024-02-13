import styles from "./recipe.module.css"
import bookmark from "../../../images/recepiesPage/Bookmark.svg"

type Props = {
    imgUrl: string,
    category: string,
    name: string,
    time: string,
    rating: string
}

const Recipe:React.FC<Props> = ({
    imgUrl,
    category,
    name,
    time,
    rating
}) => {
    return ( 
        <div className={styles.recipesCard}>
            <img className={styles.dishImg} src={imgUrl} alt="chickenKing" />
            <div className={styles.dishInfo}>
                <div className={styles.visibleInfo}>
                    <div className={styles.category}>{category}</div>
                    <div className={styles.dishName}>{name}</div>
                    <div className={styles.paramsGroup}>
                        <div className={styles.param}>{time} •</div>
                        <div className={styles.param}><span>&#9733;</span> {rating}</div>
                    </div>
                </div>
                <img className={styles.bookmark} src={bookmark} alt="bookmark" />
            </div>
        </div>
    );
}
 
export default Recipe;