import styles from "./Styles/orderBook.module.css";
export default function orederBook() {
    return (
        <main>
            <table className={styles.table}>
                <colgroup>
                    <col width={160}></col>
                    <col width={180}></col>
                    <col width={160}></col>
                </colgroup>
                <tbody>
                    <tr className={styles.sellTr}>
                        <td className={styles.bar}>
                            <div style={{ width: "5%" }} className={`${styles.barChild} ${styles.sell}`}>
                                <p>0.001</p>
                            </div>
                        </td>
                        <td className={styles.priceSell}>20,000</td>
                        <td></td>
                    </tr>

                    <tr className={styles.tr}>
                        <td className={styles.bar}>
                            <div style={{ width: "35%" }} className={`${styles.barChild} ${styles.sell}`}>
                                <p>123,456,789,012,345,789</p>
                            </div>
                        </td>
                        <td className={styles.price}>10,000</td>
                        <td></td>
                    </tr>

                    <tr className={styles.buyTr}>
                        <td></td>
                        <td className={styles.priceBuy}>10,000</td>
                        <td className={styles.barBuy}>
                            <div style={{ width: "35%" }} className={`${styles.barChild} ${styles.buy}`}>
                                <p>123,456,789,012,345,789</p>
                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>
        </main>
    );
}
