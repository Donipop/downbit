import styles from './Styles/tradeHistory.module.css'

export default function TradeHistory(){
    return (
        <main className={styles.main}>
            <ul className={styles.ul}>
                <li className={styles.li}><div className={styles.button}>체결</div></li>
                <li className={styles.li}><div className={styles.button}>일별</div></li>
            </ul>
            <div>

                <table className={styles.ty01}>
                    <thead>
                        <tr>
                            <th>체결시간</th>
                            <th>체결가격<em>(KRW)</em></th>
                            <th>체결수량<em>(BTC)</em></th>
                            <th>체결금액<em>(KRW)</em></th>
                        </tr>
                    </thead>
                </table>

                <div>
                    <table className={styles.ty02}>
                        <tbody>
                            <tr>
                                <td>2021-08-12 12:00:00</td>
                                <td>36,000,000</td>
                                <td>0.01</td>
                                <td>3,000,000</td>
                            </tr>
                            <tr>
                                <td>2021-08-12 12:00:00</td>
                                <td>36,000,000</td>
                                <td>0.01</td>
                                <td>3,000,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </main>
    )
}
