import styles from "./appPreviewImg.module.css";
import mobileScreen from "../../../assets/images/molecules/MobileScreen.svg";
import decorElem3 from "../../../assets/images/molecules/decorElem3.svg";

const AppPreviewImg = () => {
  return (
    <figure className={styles.appPreviewImg}>
      <img
        className={styles.mobileScreen}
        src={mobileScreen}
        loading="lazy"
        alt="mobile Screen"
      />
      <img
        className={styles.decorElem3}
        src={decorElem3}
        loading="lazy"
        alt="decorative element"
      />
    </figure>
  );
};

export default AppPreviewImg;
