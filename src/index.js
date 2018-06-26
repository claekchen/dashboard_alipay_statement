import React from 'react'
import { createStore } from 'redux'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import index from './reducer/index'
import './index.css'
import App from './page/App'

const store = createStore(index)
window.store = store

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
