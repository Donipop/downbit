import styles from "./Styles/order.module.css";
export default function Order() {
    return (
        <main className={styles.order}>
            <article>
                <div>
                    <ul className={styles.ul}>
                        <li className={styles.buy}>
                            <div className={styles.btnA}>매수</div>
                        </li>
                        <li className={styles.sell}>
                            <div className={styles.btnA}>매도</div>
                        </li>
                        <li>
                            <div className={styles.btnA}>거래내역</div>
                        </li>
                    </ul>
                </div>
                <div>
                    <form className={styles.form}>
                        <label>주문 유형:</label>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="type"
                                    value="choice"
                                    checked
                                />
                                지정가
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="type"
                                    value="market"
                                />
                                시장가
                            </label>
                        </div>
                        <br />
                        <label>주문가능:</label>
                        <label>0 KRW</label>
                        <br />

                        <label>매수가격(KRW):</label>
                        <div className="number-input">
                            <input
                                type="number"
                                min="0"
                                max="100"
                                step="1"
                                value="0"
                            />
                            <button className="btn plus-btn">+</button>
                            <button className="btn minus-btn">-</button>
                        </div>

                        <br />
                        <label>주문수량(BTC):</label>
                        <input type="number" id="price" name="price" />
                        {/* <input type="number" id="price" name="price" required /> */}
                        <br />
                        <label>주문총액(KRW)</label>
                        <input
                            type="number"
                            id="totalPrice"
                            name="totlaPrice"
                        />
                        <br />
                        <button type="submit">주문하기</button>
                    </form>
                </div>
            </article>
        </main>
    );
}
