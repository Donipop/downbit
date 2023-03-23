import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

interface Props {
    data: number[][];
}

function Chart({ data }: Props) {
    const chartRef = useRef<HTMLDivElement>(null);
    const wheelCount = useRef<number>(1);

    useEffect(() => {
        if (!chartRef.current) {
            return;
        }

        const options: ApexCharts.ApexOptions = {
            series: [{ data }],
            chart: {
                type: "candlestick",
                height: 350,
                zoom: {
                    enabled: true,
                },
            },
            title: {
                text: "AAPL Historical",
                align: "left",
            },
            xaxis: {
                type: "datetime",
            },
            yaxis: {
                tooltip: {
                    enabled: true,
                },
            },
        };

        const chart = new ApexCharts(chartRef.current, options);
        chart.render();

        chartRef.current?.addEventListener("wheel", (e) => {
            handleWheelEvent(e, chart);
        });

        return () => {
            chartRef.current?.removeEventListener("wheel", (e) => {
                handleWheelEvent(e, chart);
            });
            chart.destroy();
        };
    }, [data]);

    const handleWheelEvent = (event: WheelEvent, chart: any | null) => {
        if (!chart) {
            return;
        }
        const mouseX: number = event.clientX - 63;
        const xPositions = chart.w.globals.timescaleLabels;
        if (xPositions.length === 0) return;
        const position = xPositions.filter(
            (item: any) => item.position < mouseX
        );
        if (position.length === 0) return;
        // console.log(new Date(position[position.length-1].dateString).getTime());
        // console.log(position[position.length-1]);
        const leftCount = position.length - 1;
        const rightCount = xPositions.length - position.length;
        // console.log(xPositions);
        console.log(`왼쪽으로 : ${leftCount} 오른쪽으로 : ${rightCount}`);
        if(wheelCount.current >= 0){
          if(event.deltaY > 0){
            wheelCount.current++;
          }else if(wheelCount.current > 0){
            wheelCount.current--;
          }
        }
        console.log(`wheelCount : ${wheelCount.current}`);
        // zoom
        const startX = new Date(position[position.length-1].dateString).getTime() + wheelCount.current * 0.01;
        const endX = new Date(xPositions[position.length].dateString).getTime() - wheelCount.current * 0.01;
        console.log(`startX : ${startX} endX : ${endX}`)
        chart.zoomX(startX, endX);
        
        
        
    };

    return <div id="candlestickChart" ref={chartRef}></div>;
}

export default Chart;
