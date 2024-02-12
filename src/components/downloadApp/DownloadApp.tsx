import React from "react";
import styles from './downloadApp.module.css'
import phoneScreen from '../../images/downloadAppImg/MobileScreen.svg'
import arrow from '../../images/downloadAppImg/Arrow.svg'
import illustr01 from '../../images/downloadAppImg/Illustration01.svg'
import curlyArrow from '../../images/downloadAppImg/curlyArrow.svg'

const DownloadApp = () => {
    return ( 
        <div>
            <div className={styles.container}>
                <div className={styles.imgBlock}>
                    <img className={styles.phoneImg} src={phoneScreen} alt="phoneScreen"/>
                    <img className={styles.illustr01} src={illustr01} alt="illustration" />
                </div>
                <div className={styles.infoBlock}>
                    <div className={styles.title}>Premium <span>Quality</span><br /> For Your Health</div>
                    <ul className={styles.list}>
                        <li className="paragraph">Premium quality food is made with ingredients that are packed with essential vitamins, minerals.</li>
                        <li className="paragraph">These foods promote overall wellness by support healthy digestion and boosting immunity</li>
                    </ul>
                    <button className="primary__btn">
                        Download
                        <img src={arrow} alt="arrow" />
                    </button>
                    <img className={styles.curlyArrow} src={curlyArrow} alt="curlyArrow" />
                </div>
            </div>
            <hr />
        </div>
     );
}
 
export default DownloadApp;