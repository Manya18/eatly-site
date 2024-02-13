import React from "react";
import styles from './appPreviewPage.module.css'
import phoneScreen from '../../images/downloadAppImg/MobileScreen.svg'
import arrow from '../../images/downloadAppImg/Arrow.svg'
import illustr01 from '../../images/downloadAppImg/Illustration01.svg'
import curlyArrow from '../../images/downloadAppImg/curlyArrow.svg'
import StyledSpan from "../uiComponents/StyledSpan";
import TitleTypeSecondary from "../uiComponents/TitleTypeSecondary";
import ButtonTypePrimary from "../uiComponents/ButtonTypePrimary";

const AppPreviewPage = () => {
    return ( 
        <article>
            <div className={styles.container}>
                <figure className={styles.imgBlock}>
                    <img className={styles.phoneImg} src={phoneScreen} loading="lazy" alt="phone screen"/>
                    <img className={styles.illustr01} src={illustr01} loading="lazy" alt="decorative element" />
                </figure>
                <section className={styles.infoBlock}>
                    <TitleTypeSecondary>
                        Premium  
                        <StyledSpan> Quality</StyledSpan>
                        <br /> For Your Health
                    </TitleTypeSecondary>
                    <ul className={styles.list}>
                        <li>  
                            <p>Premium quality food is made with ingredients that are packed with essential vitamins, minerals.</p>
                        </li>
                        <li> 
                            <p>These foods promote overall wellness by support healthy digestion and boosting immunity</p>
                        </li>
                    </ul>
                    <ButtonTypePrimary>
                        Download
                        <img src={arrow} loading="lazy"alt="arrow" />
                    </ButtonTypePrimary>
                    <img className={styles.curlyArrow} src={curlyArrow} loading="lazy" alt="curly arrow" />
                </section>
            </div>
            <hr className={styles.hr}/>
        </article>
     );
}
 
export default AppPreviewPage;