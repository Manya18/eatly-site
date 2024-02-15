import styles from "./purchasesDashboard.module.css";
import StatisticPurchasesCard from "../../molecules/statisticPurchasesCard/StatisticPurchasesCard";

import violetDivider from "../../../assets/images/organisms/violetDivider.svg";
import orangeDivider from "../../../assets/images/organisms/orangeDivider.svg";
import expenseIcon from "../../../assets/images/organisms/expenseIcon.svg";
import vocherUsageIcon from "../../../assets/images/organisms/vocherUsageIcon.svg";

const purchasesStatList = [
  {
    title: "Expense",
    changing: "Increased By 10%",
    price: "$409.00",
    icon: expenseIcon,
    progressBar: violetDivider,
  },
  {
    title: "Vocher Usage",
    changing: "Increased By 5%",
    price: "$45.78",
    icon: vocherUsageIcon,
    progressBar: orangeDivider,
  },
];

const PurchasesDashboard = () => {
  return (
    <div className={styles.purchasesDashboard}>
      <div className={styles.blockHead}>
        <div className={styles.blockTitle}>Purchases</div>
        <select className={styles.select} name="period">
          <option value="This Month">This Month</option>
        </select>
      </div>
      <div className={styles.purchasesStatList}>
        {purchasesStatList.map((block) => (
          <div key={block.title}>
            <StatisticPurchasesCard
              title={block.title}
              changing={block.changing}
              price={block.price}
              icon={block.icon}
              progressBar={block.progressBar}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurchasesDashboard;
