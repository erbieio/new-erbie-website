import * as echarts from "echarts";
import { useEffect } from "react";
import { Get24hTxsItem } from "../../../../api/modules/explorer";


export type VolumeChartProps = {
  list: Array<Get24hTxsItem>
}
export default function VolumeChart(props: VolumeChartProps) {
  const data = props.list.map(item => item.num)
  const option = {
    xAxis: {
      type: "category",
      data: ["1", "2", "3", "4", "5", "6", "7","8","9","10",'11','12','13','14','15','16','17','18','19','20','21','22','23'],
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
      left: "10%",
      right: "4%",
      top: "10%",
      bottom: "20%",
    },
  };
  const initChart = () => {
    const chartDom = document.getElementById("volume-chart");
    const myChart = echarts.init(chartDom);
    myChart.setOption(option);
    option && myChart.setOption(option);
  }
  useEffect(() => {
    initChart()
    window.addEventListener('resize', initChart)
    return () => {
      window.removeEventListener('resize', initChart)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.list]);
  return (
    <div className="w-100% flex justify-center">
      <div id="volume-chart" style={{ height: "24vh", width: "33vw" }}></div>
    </div>
  );
}
