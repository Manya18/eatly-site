import { PurchaseCardProps } from "../../../types/PurchaseCardProps";
import styles from "./purchaseCard.module.css";

const PurchaseCard = ({
  title,
  imgUrl,
  status,
  date,
}: React.PropsWithChildren<PurchaseCardProps>) => {
  return (
    <article className={styles.purchase}>
      <section className={styles.leftPart}>
        <img src={imgUrl} loading="lazy" alt={title} />
        <div className={styles.textGroup}>
          <span className={styles.purchaseTitle}>{title}</span>
          <span className={styles.purchasesStatus}>{status}</span>
        </div>
      </section>
      <span className={styles.date}>{date}</span>
    </article>
  );
};

export default PurchaseCard;
