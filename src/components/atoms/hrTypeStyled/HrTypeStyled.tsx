import styles from "./hrTypeStyled.module.css"

interface hrProps {
    needMargin?: boolean
}

const HrTypeStyled : React.FC<hrProps> = ( {needMargin}) => {
    return ( 
        <div>
        {needMargin ? <hr className={`${styles.margin} ${styles.hr}`} /> : <hr className={styles.hr} />}
        </div>
     );
}
 
export default HrTypeStyled;