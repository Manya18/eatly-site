import styles from "./uiComponents.module.css"

interface SecondaryButtonProps { 
    children: React.ReactNode;
}

const ButtonTypePrimary = (props: React.PropsWithChildren<SecondaryButtonProps>) => {
    return ( 
        <button className={styles.secondaryButton}>{props.children}</button>
     );
}
 
export default ButtonTypePrimary;