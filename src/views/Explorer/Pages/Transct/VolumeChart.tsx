import * as echarts from 'echarts';
import { useEffect } from 'react';


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
      margin: 23 // 设置标签与轴线之间的距离为10  
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
        shadowOffsetX: 5,  
        shadowOffsetY: 5, 
     }
    }
  ],
  grid: {
    left: '15%',
    right: '9%',
    top: '15%',
    bottom: '24%',
  }
};





export default function VolumeChart() {
    useEffect(() => {
        const chartDom = document.getElementById('volume-chart');

        const myChart = echarts.init(chartDom);
        myChart.setOption(option);
      
      option && myChart.setOption(option);
    },[])
  return (
    <div className='w-100% flex justify-center'>
        <div id='volume-chart' style={{height:'28vh',width: '418px'}}></div>
    </div>
  )
}
