import Header from "../../components/layout/Header"
import { useLocation } from "react-router-dom";
import CodeSelect from "./CodeSelect";

function Trade() {
    const { search } = useLocation();
    const code: string = new URLSearchParams(search).get("code") || "BTC";
    
    return (
        <main>
            <Header/>
            <h1>
                거래창{code}
            </h1>
            <div style={{width: "500px"}}>
                <CodeSelect/>
            </div>
            
        </main>
    );
    }
export default Trade;
