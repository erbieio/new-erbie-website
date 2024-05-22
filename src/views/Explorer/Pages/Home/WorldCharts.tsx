import { useEffect, useState } from "react";
import * as echarts from "echarts";
import { registerMap } from "echarts/core";
import worldGeoJSON from "./worldGEO1.json";
import { debounce } from "../../../../utils/common";
import { get_validator_locations } from "../../../../api/modules/explorer";
import "./WorldCharts.scss";
const getOption = (mapData: Array<MapDataItem>): echarts.EChartOption => ({
  // tooltip: {
  //   trigger: "axis", // 触发类型，默认数据触发，可选为：'item'、'axis'
  // },
  geo: {
    map: "world",
    fitSize: true,
    label: {
      show: false
    },

    emphasis: {
      label: {
        show: false
      },
      itemStyle: {
      areaColor: '#8d5dc1'
    },
    },
  },
  series: [
    {
      name: "World Map",
      label: {  
        show: false // 关闭散点图上的标签显示（如果需要的话）  
      }, 
      // type: 'map', // 指定是地图类型
      type: "scatter", // 例如使用散点图来展示数据
      coordinateSystem: "geo", // 指定使用地理坐标系
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // mapType: "world", // 指定使用的地图，这里为世界地图
      roam: false, // 是否开启鼠标缩放和平移漫游
      data: mapData,
    },
  ],
});

interface MapDataItem {
  name: string;
  value: Array<number>;
  itemStyle: { color: string };
  emphasis: {
    // 高亮样式
    itemStyle: {
      color: string; // 高亮时区域颜色
    };
  };
}
export default function WorldCharts() {
  let validatorLocations: Array<MapDataItem> = [];
  const renderMap = debounce(() => {
    const myChart = echarts.init(document.getElementById("world-chart"));
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    registerMap("world", worldGeoJSON);
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(getOption(validatorLocations));
  }, 200);

  const [totalCity, setTotalCitys] = useState(0);
  const [totalCountry, setTotalCountrys] = useState(0);
  const handleGetLocations = async () => {
    const data = await get_validator_locations();
    const mapData = data.map((item) => {
      return {
        name: item.address,
        value: [item.longitude, item.latitude],
        itemStyle: { color: "#9e42e4" },
        emphasis: {
          // 高亮样式
          itemStyle: {
            color: "#9e42e4", // 高亮时区域颜色
          },
          // label: {
          //   show: false
          // }
        },
      };
    });
    validatorLocations = mapData;
    setTotalCitys(Array.from(new Set(data.map((item) => item.city))).length);
    setTotalCountrys(
      Array.from(new Set(data.map((item) => item.country))).length
    );
    renderMap();
  };

  useEffect(() => {
    handleGetLocations();
    // renderMap()
    window.addEventListener("resize", renderMap);
    return () => {
      window.removeEventListener("resize", renderMap);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex justify-center items-center w-600px h-36vh relative world-chart">
      <div id="world-chart" style={{ width: 600, height: "36vh" }}></div>
      <div className="absolute bottom-0 left-0">
        <div className="total-card">
          <span>{totalCountry}</span> Countries
        </div>
        <div className="total-card">
          <span>{totalCity}</span> Cities
        </div>
      </div>
    </div>
  );
}
