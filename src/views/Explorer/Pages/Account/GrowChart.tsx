
import { useEffect } from 'react';
import * as echarts from 'echarts';

const option= {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisTick: {
        show: false
    },
    axisLine: {
        lineStyle: {  
            type: 'dotted', // 设置为虚线  
            // 这里还可以设置其他线条样式，如颜色、宽度等  
            color: '#eee', // 刻度线颜色  
            width: 0 // 刻度线宽度  
        }
    },
    axisLabel: {  
        margin: 26 // 设置标签与轴线之间的距离为10  
    }
  },
  yAxis: {
    type: 'value',
    min: 5,
    // minInterval: 200,
    splitNumber: 3, // 分割成10段 
    nameTextStyle: {
        fontSize: 20
    },
    axisLine: {
        lineStyle: {  
            type: 'dotted', // 设置为虚线  
            // 这里还可以设置其他线条样式，如颜色、宽度等  
            color: '#eee', // 刻度线颜色  
            width: 1 // 刻度线宽度  
            
        }
    },
    splitLine: {
        show: true,

        lineStyle: {
            type: 'dashed', // 设置为虚线  
            // 这里还可以设置其他线条样式，如颜色、宽度等  
            color: '#acaaaa', // 刻度线颜色  
            width: 1 // 刻度线宽度  
        }
    }
  },
  series: [
    {
      data: [820, 22, 901, 45, 1290, 500, 888],
      type: 'line',
      smooth: true,
      lineStyle: {
        color: '#D300FE',
        width: 3,
        shadowColor:'#D300FE',
        shadowBlur: 18,
        shadowOffsetX: 4,  
        shadowOffsetY: 4,
     }
    }
  ],
  grid: {
    left: '20%',
    right: '5%',
    top: '14%',
    bottom: '24%',
  }
};
export default function GrowChart() {
    useEffect(() => {
        const chartDom = document.getElementById('growth-chart');
        const myChart = echarts.init(chartDom);
        myChart.setOption(option);
        option && myChart.setOption(option);
    },[])
  return (
    <div className='w-100%'>
        <div id='growth-chart' style={{height:'22vh',width: '230px'}}></div>
    </div>
  )
}
