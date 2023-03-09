import styles from "./Styles/codeSelect.module.css";

export default function CodeSelect() {
    return (
        <main>
            <div>
                <div>
                    <div className={styles.search}>
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="코인명/심볼검색"
                        />
                    </div>
                </div>
                <table className={styles.table}>
                    <colgroup>
                        <col width="94px"></col>
                        <col width="98px"></col>
                        <col width="58px"></col>
                        <col width="*"></col>
                    </colgroup>
                    <thead className={styles.thead}>
                        <tr className={styles.tr}>
                            <th className={styles.th}>한글명</th>
                            <th className={styles.th}>현재가</th>
                            <th className={styles.th}>전일대비</th>
                            <th className={styles.th}>거래대금</th>
                        </tr>
                    </thead>
                </table>

                <div style={{ height: "200px" }}>
                    <div className={styles.scrollA}>
                        <table className={styles.table}>
                            <colgroup>
                                <col width="94px"></col>
                                <col width="98px"></col>
                                <col width="58px"></col>
                                <col width="*"></col>
                            </colgroup>
                            <tbody
                                className={`${styles.tbody} ${styles.borderNone}`}
                            >
                                <tr className={styles.tr}>
                                    <td className={styles.td}>비트코인</td>
                                    <td className={styles.td}>1,000,000</td>
                                    <td className={styles.td}>+9.23%</td>
                                    <td className={styles.td}>1,000,000,000</td>
                                </tr>
                                <tr className={styles.tr}>
                                    <td className={styles.td}>이더리움</td>
                                    <td className={styles.td}>1,000,000</td>
                                    <td className={styles.td}>+1.05%</td>
                                    <td className={styles.td}>1,000,000,000</td>
                                </tr>
                                <tr className={styles.tr}>
                                    <td className={styles.td}>도지코인</td>
                                    <td className={styles.td}>1,000,000</td>
                                    <td className={styles.td}>-2.50%</td>
                                    <td className={styles.td}>500,000,000</td>
                                </tr>
                                <tr className={styles.tr}>
                                    <td className={styles.td}>리플</td>
                                    <td className={styles.td}>1,000,000</td>
                                    <td className={styles.td}>+128%</td>
                                    <td className={styles.td}>2,000,000,000</td>
                                </tr>
                                <tr className={styles.tr}>
                                    <td className={styles.td}>폴카닷</td>
                                    <td className={styles.td}>1,000,000</td>
                                    <td className={styles.td}>-122%</td>
                                    <td className={styles.td}>500,000,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}
