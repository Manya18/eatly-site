import { StaticPurchasesCardProps } from "../../../types/StatisticPurchasesCardProps";
import styles from "./dashboardBlock.module.css";

const DashboardBlock = ({ title, changing, price, icon, progressBar } : React.PropsWithChildren<StaticPurchasesCardProps>) => {
  return (
    <section className={styles.card}>
      <div className={styles.cardInfo}>
        <div className={styles.mainPart}>
          <img className={styles.icon} src={icon} loading="lazy" alt="icon"></img>
          <div className={styles.textGroup}>
            <span className={styles.cardTitle}>{title}</span>
            <span className={styles.cardChanges}>{changing}</span>
          </div>
        </div>
        <span className={styles.price}>{price}</span>
      </div>
      <img className={styles.scale} src={progressBar} loading="lazy" alt="progress bar" />
    </section>
  );
};

export default DashboardBlock;
