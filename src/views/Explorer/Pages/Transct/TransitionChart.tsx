import * as echarts from "echarts/core";
import { TooltipComponent, LegendComponent } from "echarts/components";
import { PieChart } from "echarts/charts";
import { LabelLayout } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { useEffect, useRef } from "react";
import { GetStatsResponse } from "../../../../api/modules/explorer";
import { debounce } from "../../../../utils/common";

echarts.use([
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout,
]);

export interface TransactionChartProps {
  data: GetStatsResponse | undefined;
}
export default function TransitionChart(props: TransactionChartProps) {
  const myRef = useRef<HTMLDivElement>(null);
  let myChart: echarts.ECharts;
  const initChart = debounce(() => {
    if (myChart) {
      myChart.dispose();
    }
    if (myRef.current && props.data) {
      myChart = echarts.init(myRef.current);
      const option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          right: "center", // 设置图例组件离容器右侧的距离
          y: "center", // 设置图例组件离容器顶部/底部的距离
          orient: "vertical", // 图例列表的布局朝向
          borderRadius: 120,
          left: "0",
          icon: "circle",
          itemStyle: {},
          textStyle: {
            color: "white",
          },
        },
        series: [
          {
            name: "TRANSACTIONS BY TYPE",
            type: "pie",
            radius: "88%",
            left: "220px",
            data: [
              {
                value: props.data.totalErbieTx,
                name: "Erbie Transactions",
                itemStyle: { color: "#740091" },
              },
              {
                value:
                  props.data.totalTransaction -
                  props.data.totalErbieTx -
                  props.data.totalTransferTx,
                name: "Contract Transactions",
                itemStyle: { color: "#393552" },
              },
              {
                value: props.data.totalTransferTx,
                name: "Regular Way",
                itemStyle: { color: "#4A336B" },
              },
            ],
            label: {
              show: false,
            },
            seriesLayoutBy: "column",
            center: ["50%", "50%"],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
        grid: {
          left: "10%",
          right: "10%",
          top: "10%",
          bottom: "20%",
        },
      };
      myChart.setOption(option);
    }
  }, 500);
  useEffect(() => {
    if (props.data) {
      initChart();
    }

    window.addEventListener("resize", initChart);
    return () => {
      window.removeEventListener("resize", initChart);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.data]);
  return (
    <div className="w-100% flex justify-center">
      <div
        id="transition-chart"
        className="w-84vw h-20vh lg:w-26vw lg:w-18vh"
        ref={myRef}
      ></div>
    </div>
  );
}
