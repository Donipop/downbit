import Header from "../../components/layout/Header";
import { useLocation } from "react-router-dom";
import CodeSelect from "./CodeSelect";
import Order from "./Order";
import OrderBook from "./OrderBook";
import styles from "./Styles/trade.module.css";
import Chart from "./Chart";
import ChartData from "./Component/ChartData";
function Trade() {
    const { search } = useLocation();
    const code: string = new URLSearchParams(search).get("code") || "BTC";

    return (
        <main>
            <Header />
            <h1>거래창{code}</h1>
            <div className={styles.codeSelect}>
                <CodeSelect />
            </div>
            <h1>주문창</h1>
            <div className={styles.order}>
                <Order />
            </div>
            <h1>호가창</h1>
            <div className={styles.orderBook}>
                <OrderBook />
            </div>
            <h1>차트</h1>
            <div className={styles.chart}>
                <Chart data={ChartData}/>
            </div>
        </main>
    );
}
export default Trade;
