import styles from "./Styles/order.module.css";
export default function Order() {
    return (
        <main className={styles.order}>
            <article>
                <div>
                    <ul className={styles.ul}>
                        <li className={`${styles.buy} ${styles.li}`}>
                            <div className={styles.btnA}>매수</div>
                        </li>
                        <li className={`${styles.sell} ${styles.li}`}>
                            <div className={styles.btnA}>매도</div>
                        </li>
                        <li className={styles.li}>
                            <div className={styles.btnA}>거래내역</div>
                        </li>
                    </ul>
                </div>
                <div>
                    <dl className={styles.dl}>
                        <dt>
                            <strong>주문구분</strong>
                        </dt>
                        <dd className={styles.checkOption}>
                            <input type="radio" name="order" id="order1" />
                            <label htmlFor="order1">지정가</label>
                            <input type="radio" name="order" id="order2" />
                            <label htmlFor="order2">시장가</label>
                        </dd>
                        <dt>
                            <strong>주문가능</strong>
                        </dt>
                        <dd>
                            <span>10,000,000 KRW</span>
                        </dd>
                        <dt>
                            <strong>매수가격 (KRW)</strong>
                        </dt>
                        <dd>
                            <span>
                                <input type="text" />
                            </span>
                            <span>
                                <button type="button" className={styles.btn}>+</button>
                                <button type="button" className={styles.btn} style={{borderLeft: "none"}}>-</button>
                            </span>
                        </dd>
                        <dt>
                            <strong>주문수량 (BTC)</strong>
                        </dt>
                        <dd>
                            <span>
                                <input type="text" />
                            </span>
                        </dd>
                        <dd className={styles.percents}>
                            <span>
                                <button type="button">10%</button>
                                <button type="button">25%</button>
                                <button type="button">50%</button>
                                <button type="button">100%</button>
                                <button type="button">직접입력</button>
                            </span>
                        </dd>
                        <dt>
                            <strong>주문총액 (KRW)</strong>
                        </dt>
                        <dd>
                            <span>0 KRW</span>
                        </dd>
                    </dl>
                    <div className={`${styles.dl} ${styles.btnDiv}`}>
                        <div>
                            <button type="button" className={`${styles.btn} ${styles.btnBuySub}`}>초기화</button>
                            <button type="button" className={`${styles.btn} ${styles.btnBuy}`}>매수</button>
                        </div>
                        
                        <button type="button" className={`${styles.btn} ${styles.btnSell}`}>매도</button>
                        <button type="button" className={`${styles.btn} ${styles.btnLogin}`}>로그인</button>
                    </div>
                </div>
            </article>
        </main>
    );
}
