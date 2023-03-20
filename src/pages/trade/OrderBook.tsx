import styles from "./Styles/orderBook.module.css";
export default function orederBook() {
        // 1부터 15까지 배열
        const arr = Array.from({ length: 15 }, (v, i) => i + 1);
    return (
        <div className={styles.main}>
            <table className={styles.table}>
                <colgroup>
                    <col width={160}></col>
                    <col width={180}></col>
                    <col width={160}></col>
                </colgroup>
                <tbody className={styles.tbody}>
                    {/* 판매 15개 */}
                    {arr.map((item, index) => (
                        <tr className={styles.sellTr} key={item}>
                            <td className={styles.bar}>
                            <div style={{ width: "5%" }} className={`${styles.barChild} ${styles.sell}`}>
                                <p>0.001</p>
                            </div>
                            </td>
                            <td className={styles.priceUp}>20,000</td>
                            <td></td>
                        </tr>
                    ))}
                    {/* 구매 15개 */}
                    {arr.map((item, index) => (
                        <tr className={styles.buyTr}>
                            <td></td>
                            <td className={styles.priceDown}>9,000</td>
                            <td className={styles.barBuy}>
                                <div style={{ width: "35%" }} className={`${styles.barChild} ${styles.buy}`}>
                                    <p>123,456,789,012,345,789</p>
                                </div>
                            </td>
                        </tr>
                    ))}

                    {/* <tr className={styles.sellTr}>
                        <td className={styles.bar}>
                            <div style={{ width: "5%" }} className={`${styles.barChild} ${styles.sell}`}>
                                <p>0.001</p>
                            </div>
                        </td>
                        <td className={styles.priceUp}>20,000</td>
                        <td></td>
                    </tr>

                    <tr className={styles.tr}>
                        <td className={styles.bar}>
                            <div style={{ width: "28%" }} className={`${styles.barChild} ${styles.sell}`}>
                                <p>123,456,789,012,345,789</p>
                            </div>
                        </td>
                        <td className={styles.price}>10,000</td>
                        <td></td>
                    </tr>

                    <tr className={styles.buyTr}>
                        <td></td>
                        <td className={styles.priceDown}>9,000</td>
                        <td className={styles.barBuy}>
                            <div style={{ width: "35%" }} className={`${styles.barChild} ${styles.buy}`}>
                                <p>123,456,789,012,345,789</p>
                            </div>
                        </td>
                    </tr> */}

                </tbody>
            </table>
        </div>
    );
}
