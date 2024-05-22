
import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  LegendComponent
} from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { useEffect } from 'react';

echarts.use([
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout
]);



export interface TransactionChartProps {
  erbie: number
  contract: number
  regular: number
}
export default function TransitionChart(props: TransactionChartProps) {
  const initChart = () => {
    const chartDom = document.getElementById('transition-chart');
    const myChart = echarts.init(chartDom);
    const option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        right: 'center', // 设置图例组件离容器右侧的距离  
        y: 'center', // 设置图例组件离容器顶部/底部的距离  
        orient: 'vertical', // 图例列表的布局朝向 
        borderRadius: 120,
        left: '0',
        icon: 'circle',
        itemStyle: {
    
        },
        textStyle: {
            color: 'white'
        },
      },
      series: [
        {
          name: 'TRANSACTIONS BY TYPE',
          type: 'pie',
          radius: '88%',
          right: '-160px',
          data: [
            { value: props.erbie, name: 'Erbie Transactions',itemStyle:{color: '#740091'} },
            { value: props.contract, name: 'Contract Transactions',itemStyle:{color: '#393552'} },
            { value:  props.regular, name: 'Regular Way',itemStyle:{color: '#4A336B'} },
          ],
          label: {
            show: false
          },
          seriesLayoutBy:'column',
          center:['50%', '50%'],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },
       
      ]
    };
    
    option && myChart.setOption(option);
  }
    useEffect(() => {
      initChart()
    },[])
  return (
    <div className='w-100% flex justify-center px-20px'>
        <div id='transition-chart' style={{height:'18vh',width: '310px'}}></div>
    </div>

  )
}
