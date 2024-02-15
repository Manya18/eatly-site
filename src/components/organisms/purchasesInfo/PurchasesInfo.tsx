import StyledSpan from "../../atoms/spanTypeViolet/SpanTypeViolet";
import TitleTypeSecondary from "../../atoms/titleTypeSecondary/TitleTypeSecondary";
import PurchaseCard from "../../molecules/purchaseCard/PurchaseCard";
import styles from "./purchasesInfo.module.css"

import chickenHell from "../../../assets/images/organisms/chickenHell.svg"
import fishHellVeg from "../../../assets/images/organisms/FishHellVeg.svg"
import sweDish from "../../../assets/images/organisms/SweDish.svg"


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

const PurchasesInfo = () => {
    return ( 
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
     );
}
 
export default PurchasesInfo;