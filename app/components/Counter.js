import React, {Component, PropTypes} from 'react'

class Counter extends Component {
  constructor (props) {
    super(props)
    this.incrementAsysnc = this.incrementAsysnc.bind(this)
    this.incrementIfOdd = this.incrementIfOdd.bind(this)
  }

  incrementIfOdd () {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsysnc () {
    setTimeout(this.props.onIncrement, 1000)
  }

  render () {
    const {value, onIncrement, onDecrement} = this.props
    return (
      <div>
        当前的值为: {value} {' '}
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={this.incrementIfOdd}>偶数加</button>
        <button onClick={this.incrementAsysnc}>异步添加</button>
      </div>
    )
  }
}

Counter.PropTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter
