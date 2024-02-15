import styles from "./heroImage.module.css"

import ellipseImg from "../../../assets/images/atoms/Ellipse.svg";
import foodImg from "../../../assets/images/atoms/FoodPlate.svg";
import graphImg from "../../../assets/images/atoms/Graph.svg";
import arrow from "../../../assets/images/atoms/CurlyArrow1.svg";
import illust1 from "../../../assets/images/atoms/DecorElem1.svg";
import illust2 from "../../../assets/images/atoms/DecorElem2.svg";
import chickenHell from "../../../assets/images/organisms/chickenHell.svg";
import PurchaseCard from "../purchaseCard/PurchaseCard";

const HeroImage = () => {
    return ( 
        <figure className={styles.imageBlock}>
            <img className={styles.arrow} src={arrow} loading="lazy" alt="curly arrow" />
            <img
            className={styles.ellipseImg} src={ellipseImg} loading="lazy" alt="violet ellipse" />
            <img className={styles.foodImg} src={foodImg} loading="lazy" alt="plate of food" />
            <img className={styles.graphImg} src={graphImg} loading="lazy" alt="graph" />
            <div className={styles.dishCard}>
            <PurchaseCard
                title="Chicken Hell"
                imgUrl={chickenHell}
                status="On The Way"
                date="3:09 PM"
            />
            </div>
            <img className={styles.illust1} src={illust1} loading="lazy" alt="decorative element" />
            <img className={styles.illust2} src={illust2} loading="lazy" alt="decorative element" />
      </figure>
  
     );
}
 
export default HeroImage;