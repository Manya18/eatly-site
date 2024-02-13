import styles from "./uiComponents.module.css"

interface SecondaryTitleProps { 
    children: React.ReactNode;
}

const TitleTypeSecondary = (props: React.PropsWithChildren<SecondaryTitleProps>) => {
    return ( 
        <span className={styles.titleSecondary}>{props.children}</span>
     );
}
 
export default TitleTypeSecondary;