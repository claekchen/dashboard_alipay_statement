import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './BarChart.css'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'

class BarChart extends Component {
  componentDidMount () {
    const {id, option} = this.props
    let myChart = echarts.init(document.getElementById(id))
    myChart.setOption(option)
  }
  render () {
    const {id, style} = this.props
    return (
      <div style={style} id={id} />
    )
  }
}

BarChart.propTypes = {
  id: PropTypes.string,
  style: PropTypes.object,
  option: PropTypes.object
}

export default BarChart
