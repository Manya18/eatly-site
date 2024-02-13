import styles from "./uiComponents.module.css"

interface PrimaryButtonProps { 
    children: React.ReactNode;
}

const ButtonTypePrimary = (props: React.PropsWithChildren<PrimaryButtonProps>) => {
    return ( 
        <button className={styles.primaryButton}>{props.children}</button>
     );
}
 
export default ButtonTypePrimary;