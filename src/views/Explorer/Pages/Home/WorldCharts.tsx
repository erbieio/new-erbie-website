import { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import { registerMap } from "echarts/core";
import worldGeoJSON from "./worldGEO1.json";
import { debounce } from "../../../../utils/common";
import { get_validator_locations } from "../../../../api/modules/explorer";
import "./WorldCharts.scss";
import { LOCATIONS } from "../../../../const/mocks";
const getOption = (mapData: Array<MapDataItem>): echarts.EChartOption => ({
  // tooltip: {
  //   trigger: "axis", // 触发类型，默认数据触发，可选为：'item'、'axis'
  // },
  geo: {
    map: "world",
    fitSize: true,
    label: {
      show: false,
    },

    emphasis: {
      label: {
        show: false,
      },
      itemStyle: {
        areaColor: "#8d5dc1",
      },
    },
  },
  series: [
    {
      name: "World Map",
      label: {
        show: false, // 关闭散点图上的标签显示（如果需要的话）
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
  const myRef = useRef(null);
  const myChart = useRef<echarts.ECharts>();
  let validatorLocations: Array<MapDataItem> = [];
  const renderMap = debounce(() => {
    myChart.current = echarts.init(myRef.current);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    registerMap("world", worldGeoJSON);
    // 使用刚指定的配置项和数据显示图表。
    myChart.current.setOption(getOption(validatorLocations));
  }, 500);

  const [totalCity, setTotalCitys] = useState(0);
  const [totalCountry, setTotalCountrys] = useState(0);
  const handleGetLocations = async () => {
    if (myChart.current) {
      myChart.current.dispose();
    }

    const data = await get_validator_locations();
    if (data && data.length) {
      const allData = [...data, ...LOCATIONS];
      const mapData = allData
        ?.filter((item) => item.country !== "China,")
        .map((item) => {
          return {
            name: item.address,
            value: [item.longitude, item.latitude],
            itemStyle: { color: "#9e42e4" },
            emphasis: {
              itemStyle: {
                color: "#9e42e4",
              },
            },
          };
        });
      validatorLocations = mapData;
      setTotalCitys(
        Array.from(new Set(allData.map((item) => item.city))).length
      );
      setTotalCountrys(
        Array.from(new Set(allData.map((item) => item.country))).length
      );
      renderMap();
    }
  };

  const reRenderMap = debounce(handleGetLocations, 300);
  useEffect(() => {
    renderMap();
    handleGetLocations();
    window.addEventListener("resize", reRenderMap);
    return () => {
      window.removeEventListener("resize", reRenderMap);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex justify-center items-center relative world-chart">
      <div
        id="world-chart"
        ref={myRef}
        className="w-500px h-200px lg:w-600px lg:h-36vh"
      ></div>
      <div className="hidden lg:absolute bottom-0 left-0">
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
