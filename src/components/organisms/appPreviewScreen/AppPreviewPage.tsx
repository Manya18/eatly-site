import React from "react";
import styles from './appPreviewPage.module.css'
import AppPreviewImg from "../../molecules/appPreviewImg/AppPreviewImg";
import AppPreviewInfo from "../../molecules/appPreviewInfo/AppPreviewInfo";

const AppPreviewPage = () => {
    return ( 
        <article>
            <div className={styles.container}>
                <AppPreviewImg />
                <AppPreviewInfo />
            </div>
            <hr className={styles.hr}/>
        </article>
     );
}
 
export default AppPreviewPage;