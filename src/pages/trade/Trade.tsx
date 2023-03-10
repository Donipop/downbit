import Header from "../../components/layout/Header";
import { useLocation } from "react-router-dom";
import CodeSelect from "./CodeSelect";
import Order from "./Order";

function Trade() {
    const { search } = useLocation();
    const code: string = new URLSearchParams(search).get("code") || "BTC";

    return (
        <main>
            <Header />
            <h1>거래창{code}</h1>
            <div style={{ width: "400px" }}>
                <CodeSelect />
            </div>
            <h1>주문창</h1>
            <div style={{ width: "504px"}}>
                <Order />
            </div>
        </main>
    );
}
export default Trade;
