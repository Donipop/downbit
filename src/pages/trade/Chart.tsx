import React, { useRef, useEffect } from "react";
import {
    CandlestickData,
    ColorType,
    createChart,
    IChartApi,
} from "lightweight-charts";

interface CandleData {
    open: number;
    high: number;
    low: number;
    close: number;
    time: {year: number, month: number, day: number};
}
interface Props {
    data: CandleData[];
}
export default function Chart({ data }: Props) {
    
    const chartRef = useRef<HTMLDivElement | null>(null);
    const chartApiRef = useRef<IChartApi | null>(null);
    useEffect(() => {
        if (!chartRef.current) return;
        const chart = createChart(chartRef.current, {
            layout: {
                textColor: 'white',
                background: { type: ColorType.Solid, color: '#141A24' },
            },
            width: 1014,
            height: 360,
        });

        const candleStickSeries = chart.addCandlestickSeries({
            upColor: '#26a69a', downColor: '#ef5350', borderVisible: false,
	        wickUpColor: '#26a69a', wickDownColor: '#ef5350',
        });
        
        const candleStickData: CandlestickData[] = data;

        const interval = setInterval(() => {
            candleStickSeries.setData(candleStickData);
        }, 10);

        chartApiRef.current = chart;

        
        return () => {
            clearInterval(interval);
            chart.remove();
        }
    }, [data]);

    return <div ref={chartRef} className="chart" />;
};
