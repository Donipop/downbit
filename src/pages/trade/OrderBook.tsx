import styles from "./Styles/orderBook.module.css";
export default function orederBook() {
        // 1부터 15까지 배열
        const arrSell = Array.from({ length: 14 }, (v, i) => i + 1);
        const arrBuy = Array.from({ length: 14 }, (v, i) => i + 1);
    return (
        <div className={styles.main}>
            <table className={styles.table}>
                <colgroup>
                    <col width={160}></col>
                    <col width={180}></col>
                    <col width={160}></col>
                </colgroup>
                <tbody className={styles.tbody}>
                    <tr className={styles.sellTr}>
                        <td className={styles.bar}>
                            <div style={{ width: "5%" }} className={`${styles.barChild} ${styles.sell}`}>
                                <p>0.001</p>
                            </div>
                        </td>
                        <td className={styles.priceUp}>20,000</td>
                        <td rowSpan={15} className={styles.inner01}>
                            <dl>
                                <dt>거래량</dt>
                                <dd>15<i>BTC</i></dd>
                                <dt>거래대금</dt>
                                <dd>696,666<i>백만원</i><em>(최근24시간)</em></dd>
                            </dl>

                            <dl>
                                <dt>52주 최고</dt>
                                <dd>36,000,000<em>(2022.04.03)</em></dd>
                                <dt>52주 최저</dt>
                                <dd>1,000,000<em>(2022.12.19)</em></dd>
                            </dl>

                            <dl>
                                <dt>전일종가</dt>
                                <dd>20,000,000<i>BTC</i></dd>
                                <dt>당일고가</dt>
                                <dd>28,000,000 <em>+6.08%</em></dd>
                                <dt>당일저가</dt>
                                <dd>24,000,000 <em>-15.81%</em></dd>
                            </dl>
                        </td>
                    </tr>
                    {/* 판매 14개 */}
                    {arrSell.map((item, index) => (
                        <tr className={styles.sellTr} key={item}>
                            <td className={styles.bar}>
                            <div style={{ width: "5%" }} className={`${styles.barChild} ${styles.sell}`}>
                                <p>0.001</p>
                            </div>
                            </td>
                            <td className={styles.priceUp}>20,000</td>
                        </tr>
                    ))}
                    
                    <tr className={styles.buyTr}>
                        <td rowSpan={15} className={styles.inner02}>안녕2</td>
                        <td className={styles.priceDown}>9,000</td>
                        <td className={styles.barBuy}>
                            <div style={{ width: "35%" }} className={`${styles.barChild} ${styles.buy}`}>
                                <p>123,456,789,012,345,789</p>
                            </div>
                        </td>
                    </tr>
                    {/* 구매 14개 */}
                    {arrBuy.map((item, index) => (
                        <tr className={styles.buyTr} key={item}>
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
