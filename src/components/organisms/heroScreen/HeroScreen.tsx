import HeroImage from "../../molecules/heroImage/HeroImage";
import HeroInfo from "../../molecules/heroInfo/HeroInfo";
import styles from "./heroScreen.module.css"

const HeroScreen = () => {
    return ( 
        <div className={styles.container}>
            <HeroInfo />
            <HeroImage />
        </div>
     );
}
 
export default HeroScreen;