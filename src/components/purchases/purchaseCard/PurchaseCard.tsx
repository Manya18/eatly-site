import styles from "./purchaseCard.module.css";

type Props = {
  title: string;
  imgUrl: string;
  status: string;
  date: string;
};

const PurchaseCard: React.FC<Props> = ({ title, imgUrl, status, date }) => {
  return (
    <article className={styles.purchase}>
      <section className={styles.leftPart}>
        <img src={imgUrl} alt={title} />
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
