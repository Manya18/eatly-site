import styles from "./dashboardBlock.module.css";

type Props = {
  title: string;
  changing: string;
  price: string;
  icon: string;
  divider: string;
};

const DashboardBlock: React.FC<Props> = ({
  title,
  changing,
  price,
  icon,
  divider,
}) => {
  return (
    <article className={styles.card}>
      <div className={styles.cardInfo}>
        <div className={styles.leftPart}>
          <img className={styles.icon} src={icon} alt="icon"></img>
          <div className={styles.textGroup}>
            <span className={styles.cardTitle}>{title}</span>
            <span className={styles.cardChanges}>{changing}</span>
          </div>
        </div>
        <span className={styles.price}>{price}</span>
      </div>
      <img className={styles.scale} src={divider} alt="scale" />
    </article>
  );
};

export default DashboardBlock;
