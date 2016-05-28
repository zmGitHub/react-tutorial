import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

import Counter from './components/Counter'
import counter from './reducers/index'

const store = createStore(counter)
const EB = document.getElementById('root')

let increment = function () {
  store.dispatch({
    type: 'INCREMENT'
  })
}

let decrement = function () {
  store.dispatch({
    type: 'DECREMENT'
  })
}

const renderDOM = function () {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={increment}
      onDecrement={decrement}
    />, EB)
}

renderDOM()
store.subscribe(renderDOM)
