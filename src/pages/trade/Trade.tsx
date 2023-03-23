import Header from "../../components/layout/Header";
import { useLocation } from "react-router-dom";
import CodeSelect from "./CodeSelect";
import Order from "./Order";
import OrderBook from "./OrderBook";
import styles from "./Styles/trade.module.css";
import Chart from "./Chart";
import ChartData from "./Component/ChartData";
import TradeHistory from "./TradeHistory";
function Trade() {
    interface CandleData {
        open: number;
        high: number;
        low: number;
        close: number;
        time: { year: number; month: number; day: number };
    }
    const { search } = useLocation();
    const code: string = new URLSearchParams(search).get("code") || "BTC";
    const testData: CandleData[] = [];
    let count: number = 0;
    // 1초마다 데이터를 추가하는 코드
    const timer = setInterval(() => {
        if(count === ChartData.length) {
            clearInterval(timer);
            return
        }
        testData.push(ChartData[count]);
        count++;
    }, 20);
    return (
        <div>
            <Header />
            <main className={styles.main}>
                <div className={styles.left}>
                    <div className={styles.chart}>
                        <Chart data={testData} />
                    </div>

                    <div className={styles.orders}>
                        <div className={styles.orderBook}>
                            <OrderBook />
                        </div>

                        <div className={styles.order}>
                            <Order />
                        </div>
                    </div>
                    <div className={styles.tradeHistory}>
                        <TradeHistory />
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.codeSelect}>
                        <CodeSelect />
                    </div>
                </div>
            </main>
        </div>
    );
}
export default Trade;
