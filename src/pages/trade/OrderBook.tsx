import styles from "./Styles/orderBook.module.css";
export default function orederBook() {
        // 1부터 15까지 배열
        const arrSell = Array.from({ length: 14 }, (v, i) => i + 1);
        const arrBuy = Array.from({ length: 14 }, (v, i) => i + 1);
        const arrInfo = Array.from({ length: 13 }, (v, i) => i + 1);
    return (
        <div className={styles.main}>
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
                        <td className={styles.priceUp}>
                            <div className={styles.ty01}>20,000</div>
                            <div className={styles.ty02}>+12%</div>
                        </td>
                        <td rowSpan={15} className={styles.inner01}>
                            <dl>
                                <dt>거래량</dt>
                                <dd>15<i>BTC</i></dd>
                                <dt>거래대금</dt>
                                <dd>696,666<i>백만원</i><em>(최근24시간)</em></dd>
                            </dl>

                            <dl>
                                <dt>52주 최고</dt>
                                <dd style={{color: "#c84a31"}}>36,000,000<em>(2022.04.03)</em></dd>
                                <dt>52주 최저</dt>
                                <dd style={{color: "#0062df"}}>1,000,000<em>(2022.12.19)</em></dd>
                            </dl>

                            <dl>
                                <dt>전일종가</dt>
                                <dd className={styles.price}>20,000,000<i>BTC</i></dd>
                                <dt>당일고가</dt>
                                <dd className={styles.priceUp}>28,000,000 <em>+6.08%</em></dd>
                                <dt>당일저가</dt>
                                <dd className={styles.priceDown}>24,000,000 <em>-15.81%</em></dd>
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
                            <td className={styles.priceUp}>
                                <div className={styles.ty01}>20,000</div>
                                <div className={styles.ty02}>+1002%</div>
                            </td>
                        </tr>
                    ))}
                    
                    <tr className={styles.buyTr}>
                        <td rowSpan={15} className={styles.inner02}>
                            <div className={styles.inner02Div}>
                                <table>
                                    <colgroup>
                                        <col width={80}></col>
                                        <col width={80}></col>
                                    </colgroup>
                                    <tbody>
                                        <tr className={styles.fontGray}>
                                            <td>체결가</td>
                                            <td>체결량</td>
                                        </tr>
                                        {arrInfo.map((item, index) => (
                                            <tr key={item}>
                                            <td className={styles.fontGray}>28,000,000</td>
                                            <td className={styles.fontRed}>20,000</td>
                                            </tr>))}
                                        <tr>
                                            <td className={styles.fontGray}>26,000,000</td>
                                            <td className={styles.fontBlue}>21,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </td>
                        <td className={styles.price}>
                            <div className={styles.ty01}>20,000</div>
                            <div className={styles.ty02}>0.00%</div>
                        </td>
                        <td className={styles.barBuy}>
                            <div style={{ width: "35%" }} className={`${styles.barChild} ${styles.buy}`}>
                                <p>123,456,789,012,345,789</p>
                            </div>
                        </td>
                    </tr>

                    {/* 구매 14개 */}
                    {arrBuy.map((item, index) => (
                        <tr className={styles.buyTr} key={item}>
                            <td className={styles.priceDown}>
                                <div className={styles.ty01}>20,000</div>
                                <div className={styles.ty02}>-1.56%</div>
                            </td>
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
