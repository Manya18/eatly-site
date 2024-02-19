import ButtonTypeSecondary from "../../atoms/buttonTypeSecondary/ButtonTypeSecondary";
import styles from "./article.module.css";
import arrow from "../../../assets/images/molecules/arrow-right.svg";
import StyledSpan from "../../atoms/spanTypeViolet/SpanTypeViolet";

const Article = () => {
  return (
    <div className={styles.article}>
      <div className={styles.title}>How To Order Food On eatly ?</div>
      <div className={styles.infoGroup}>
        <div className={styles.authorCard}>
          <img src="" alt="avatar" loading="lazy" />
          <div className={styles.textGroup}>
            <div className={styles.writtenBy}>Written By</div>
            <div className={styles.authorName}>Terry Medhurst</div>
          </div>
        </div>
        <div className={styles.addons}>
          <div className={styles.reactions}>7 <StyledSpan>&#9733;</StyledSpan></div>
          <div className={styles.tags}>
            {["history", "american"].map((tag: string) => (
              <span key={tag}>{"#" + tag}{" "}</span>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.body}>
        It wasn't quite yet time to panic. There was still time to salvage the
        situation. At least that is what she was telling himself. The reality
        was that it was time to panic and there wasn't time to salvage the
        situation, but he continued to delude himself into believing there was.
      </div>
      <ButtonTypeSecondary onClick={() => {}}>
        <img src={arrow} alt="back" />
        All Articles
      </ButtonTypeSecondary>
    </div>
  );
};

export default Article;
