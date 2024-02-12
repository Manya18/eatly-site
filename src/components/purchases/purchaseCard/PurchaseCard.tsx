import styles from "./purchaseCard.module.css"

type Props = {
    title: string,
    imgUrl: string,
    status: string,
    date: string,
}

const PurchaseCard:React.FC<Props> = ({
    title,
    imgUrl,
    status,
    date,
}) => {
    return ( 
        <div className={styles.purchase}> 
            <div className={styles.leftPart}>
                <img src={imgUrl} alt={title} />
                <div className={styles.textGroup}> 
                    <div className={styles.purchaseTitle}>{title}</div>
                    <div className={styles.purchasesStatus}>{status}</div>
                </div>
            </div>
            <div className={styles.date}>{date}</div>
        </div>
     );
}
 
export default PurchaseCard;