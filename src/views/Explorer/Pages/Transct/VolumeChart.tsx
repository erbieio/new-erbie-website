import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import { Get24hTxsItem } from "../../../../api/modules/explorer";
import { debounce } from "../../../../utils/common";

export type VolumeChartProps = {
  list: Array<Get24hTxsItem>;
};
export default function VolumeChart(props: VolumeChartProps) {
  const myRef = useRef<HTMLDivElement>(null);
  let myChart: echarts.ECharts;
  const initChart = debounce(() => {
    const data = props.list.map((item) => ({ value: item.num }));
    const hours = props.list.map((item) => ({ value: item.hour }));
    if (myChart) {
      myChart.dispose();
    }
    const option: echarts.EChartOption = {
      xAxis: {
        type: "category",
        data: hours,
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
          margin: 23, // 设置标签与轴线之间的距离为10
        },
      },
      yAxis: {
        type: "value",
        min: 0,
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
          data: data,
          type: "line",
          smooth: true,
          lineStyle: {
            color: "#D300FE",
            width: 3,
            shadowColor: "#D300FE",
            shadowBlur: 18,
            shadowOffsetX: 5,
            shadowOffsetY: 5,
          },
        },
      ],
      grid: {
        left: "12%",
        right: "4%",
        top: "10%",
        bottom: "22%",
      },
    };

    if (myRef.current) {
      myChart = echarts.init(myRef.current);
      myChart.setOption(option);
    }
  }, 500);
  useEffect(() => {
    initChart();
    window.addEventListener("resize", initChart);
    return () => {
      window.removeEventListener("resize", initChart);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.list]);
  return (
    <div className="w-100% flex justify-center">
      <div
        id="volume-chart"
        className="h-20vh w-84vw lg:h-22vh lg:w-22vw"
        ref={myRef}
      ></div>
    </div>
  );
}
