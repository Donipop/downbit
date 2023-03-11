import styles from "./Styles/orderBook.module.css";
export default function orederBook() {
    return (
        <main>
            <table>
                <colgroup>
                    <col width={42}></col>
                    <col width={120}></col>
                    <col width={"*"}></col>
                </colgroup>
                <tbody>
                    <tr>
                        <td className={styles.bar}>
                            <div style={{ width: "35.835%" }}></div>
                            <p>0.001</p>
                        </td>
                        <td className={styles.price}>20,000</td>
                    </tr>

                    <tr>
                        <td className={styles.bar}>
                            <div style={{ width: "35.835%" }}></div>
                            <p>0.001</p>
                        </td>
                        <td className={styles.price}></td>
                    </tr>

                    <tr>
                        <td className={styles.bar}>
                            <div style={{ width: "35.835%" }}></div>
                            <p>0.001</p>
                        </td>
                        <td className={styles.price}></td>
                    </tr>
                </tbody>
            </table>
        </main>
    );
}
