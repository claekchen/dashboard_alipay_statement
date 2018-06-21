import React, { Component } from 'react'
import './App.css'
import BarChart from './common/BarChart'
const BarChartOption = {
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20]
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
