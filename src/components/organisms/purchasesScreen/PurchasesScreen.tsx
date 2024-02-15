import React from "react";
import styles from "./purchasesScreen.module.css"
import PurchasesInfo from "../purchasesInfo/PurchasesInfo";
import PurchasesDashboard from "../purchasesDashboard/PurchasesDashboard";



const PurchasesPage = () => {
    return ( 
        <section className={styles.container}>
            <div className={styles.flexContainer}>
                <PurchasesInfo />
                <PurchasesDashboard />
            </div>
            <hr />
        </section>
     );
}
 
export default PurchasesPage;