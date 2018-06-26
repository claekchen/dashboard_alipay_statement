import React, { Component } from 'react'
import './App.css'
import BarChart from './common/BarChart'
import * as data from './data/data'
const BarChartOption = {
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  xAxis: {
    type: 'value'
  },
  yAxis: {},
  dataZoom: [
    {   // 这个dataZoom组件，默认控制x轴。
      type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
      startValue: 0,      // 左边在 10% 的位置。
      endValue: 20         // 右边在 60% 的位置。
  }
  ],
  series: [{
    name: '净支出',
    type: 'bar',
    data: data.dataObjectByTarget.slice(0,data.dataObjectByTarget.length)
  }] 
}
class App extends Component {
  render () {
    return (
      <div className='App'>
        <BarChart id='test' style={{width:500, height:500}} option={BarChartOption} />
      </div>
    )
  }
}

export default App
