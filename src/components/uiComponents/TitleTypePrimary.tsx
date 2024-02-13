import styles from "./uiComponents.module.css"

interface PrimaryTitleProps { 
    children: React.ReactNode;
}

const TitleTypePrimary = (props: React.PropsWithChildren<PrimaryTitleProps>) => {
    return ( 
        <span className={styles.titlePrimary}>{props.children}</span>
     );
}
 
export default TitleTypePrimary;