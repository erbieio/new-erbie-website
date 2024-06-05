import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { Get24hTxsResponse } from "../../../../api/modules/explorer";

export interface GrowChartProps {
  data: Get24hTxsResponse;
}
export default function GrowChart(props: GrowChartProps) {
  const myRef = useRef<HTMLDivElement>(null);
  const option: echarts.EChartOption = {
    xAxis: {
      type: "category",
      data: props.data.map(item => item.hour),
      axisTick: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          type: "dotted", // 设置为虚线
          // 这里还可以设置其他线条样式，如颜色、宽度等
          color: "#eee", // 刻度线颜色
          width: 0, // 刻度线宽度
        },
      },
      axisLabel: {
        margin: 26, // 设置标签与轴线之间的距离为10
      },
    },
    yAxis: {
      type: "value",
      min: 5,
      // minInterval: 200,
      splitNumber: 3, // 分割成10段
      nameTextStyle: {
        fontSize: 20,
      },
      axisLine: {
        lineStyle: {
          type: "dotted", // 设置为虚线
          // 这里还可以设置其他线条样式，如颜色、宽度等
          color: "#eee", // 刻度线颜色
          width: 1, // 刻度线宽度
        },
      },
      splitLine: {
        show: true,

        lineStyle: {
          type: "dashed", // 设置为虚线
          // 这里还可以设置其他线条样式，如颜色、宽度等
          color: "#acaaaa", // 刻度线颜色
          width: 1, // 刻度线宽度
        },
      },
    },
    series: [
      {
        data: props.data.map((item) => item.num),
        type: "line",
        smooth: true,
        lineStyle: {
          color: "#D300FE",
          width: 3,
          shadowColor: "#D300FE",
          shadowBlur: 18,
          shadowOffsetX: 4,
          shadowOffsetY: 4,
        },
      },
    ],
    grid: {
      left: "14%",
      right: "6%",
      top: "14%",
      bottom: "24%",
    },
  };

  let myChart: echarts.ECharts;
  const initChart = () => {
    if (myChart) {
      myChart.dispose();
    }
    if (myRef.current) {
      myChart = echarts.init(myRef.current);
      myChart.setOption(option);
    }
  };
  useEffect(() => {
    initChart();
    window.addEventListener("resize", initChart);
    return () => {
      window.removeEventListener("resize", initChart);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.data]);
  return (
    <div className="w-100%">
      <div
        id="growth-chart"
        className="w-84vw lg:w-21vw h-20vh lg:h-22vh"
        ref={myRef}
      ></div>
    </div>
  );
}
