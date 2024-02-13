import React from "react";
import styles from "./purchasesPage.module.css"
import chickenHell from "../../images/PurchasesPage/chickenHell.svg"
import fishHellVeg from "../../images/PurchasesPage/FishHellVeg.svg"
import sweDish from "../../images/PurchasesPage/SweDish.svg"
import violetDivider from "../../images/PurchasesPage/violetDivider.svg"
import orangeDivider from "../../images/PurchasesPage/orangeDivider.svg"
import expenseIcon from "../../images/PurchasesPage/expenseIcon.svg"
import vocherUsageIcon from "../../images/PurchasesPage/vocherUsageIcon.svg"
import PurchsesStatBlock from "./dashboardBlock/DashboardBlock";
import PurchaseCard from "./purchaseCard/PurchaseCard";
import StyledSpan from "../uiComponents/StyledSpan";
import TitleTypeSecondary from "../uiComponents/TitleTypeSecondary";

const purchasesList = [
    {
        imgUrl: chickenHell,
        title: "Chicken Hell",
        status: "On The Way",
        date: "3:09 PM"
    },
    {
        imgUrl: sweDish,
        title: "Swe Dish",
        status: "Delivered",
        date: "Yesterday"
    },
    {
        imgUrl: fishHellVeg,
        title: "Fish Hell Veg",
        status: "Cancelled",
        date: "Yesterday"
    }
]

const purchasesStatList = [
    {
        title: "Expense",
        changing: "Increased By 10%",
        price: "$409.00",
        icon: expenseIcon,
        divider: violetDivider,
    },
    {
        title: "Vocher Usage",
        changing: "Increased By 5%",
        price: "$45.78",
        icon: vocherUsageIcon,
        divider: orangeDivider,
    }
]

const PurchasesPage = () => {
    return ( 
        <article className={styles.container}>
            <div className={styles.flexContainer}>
                <div className={styles.infoBlock}>
                    <TitleTypeSecondary>
                    Control <StyledSpan>Purchases</StyledSpan> <br />Via Dashboard
                    </TitleTypeSecondary>
                    <section className={styles.purchasesList}>
                        {purchasesList.map((purchase) => (
                            <div key={purchase.title}>
                                <PurchaseCard title={purchase.title} imgUrl={purchase.imgUrl} status={purchase.status} date={purchase.date} />
                            </div>
                        ))}
                    </section>
                </div>
                <div className={styles.statisticsBlock}>
                    <div className={styles.statisticsCard}>
                        <div className={styles.blockHead}>
                            <div className={styles.blockTitle}>Purchases</div>
                            <select className={styles.select} name="period">
                                <option value="This Month">This Month</option>
                            </select>
                        </div>
                        <div className={styles.purchasesStatList}>
                            {purchasesStatList.map((block) => (
                                <div key={block.title}>
                                    <PurchsesStatBlock title={block.title} changing={block.changing} price={block.price} icon={block.icon} divider={block.divider} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </article>
     );
}
 
export default PurchasesPage;