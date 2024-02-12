import styles from "./dashboardBlock.module.css"

type Props = {
    title: string,
    changing: string,
    price: string,
    icon: string,
    divider: string,
}

const DashboardBlock:React.FC<Props> = ({
    title,
    changing,
    price,
    icon,
    divider,
}) => {
    return ( 
        <div className={styles.card}>
            <div className={styles.cardInfo}>
                <div className={styles.leftPart}>
                    <img className={styles.icon} src={icon} alt='icon'></img>
                    <div>
                        <div className={styles.cardTitle}>{title}</div>
                        <div className={styles.cardChanges}>{changing}</div>
                    </div>
                </div>
                <div className={styles.price}>{price}</div>
            </div>
            <img className={styles.scale} src={divider} alt="scale"/>
        </div>
    );
}
 
export default DashboardBlock;