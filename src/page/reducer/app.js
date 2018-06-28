import data from '../data/data'
import * as types from '../constants/action-type'
const comparePriceInTarget = (a, b) => {
    return parseInt(b.value[1]) - parseInt(a.value[1])
}
class Target {
    constructor (obj) {
      this.name = ''
      this.value = [0, 0]
    }
  }
const initialState = {
    data: data,
    dataObjectByTarget: [],
    indexOfTarget: [],
    filter: [],
    option: {}
};
initialState.data.map((item, index) => {
    const target = item[9]
    const action = item[12].trim()
    const price = action === '收入' ? -item[11] : item[11]
    if (!initialState.indexOfTarget[target]) {
      const aTarget = new Target()
      aTarget.name = target
      aTarget.value[0] = index
      initialState.dataObjectByTarget.push(aTarget)
      initialState.indexOfTarget[target] = initialState.dataObjectByTarget.length - 1
    }
    initialState.dataObjectByTarget[initialState.indexOfTarget[target]].value[1] += price
})
initialState.dataObjectByTarget.sort(comparePriceInTarget)
initialState.dataObjectByTarget = initialState.dataObjectByTarget.map((item, index) =>{
    item.value[0] = index
    return item
})
initialState.option = {
    title: {
      text: '支出排行'
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
      data: initialState.dataObjectByTarget.slice(0,initialState.dataObjectByTarget.length)
    }] 
  }
export default function app(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FILTER:
      let newFilter = state.filter.slice(0)
      newFilter.push(action.name)
      return Object.assign({}, state, {filter: newFilter})
    default:
      return state;
  }
}
