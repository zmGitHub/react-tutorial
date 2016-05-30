import React, {PropTypes, Component} from 'react'
import TodoTextInput from './TodoTextInput'

class Header extends Component {
  constructor (props) {
    super(props)
    this.handleSave = this.handleSave.bind(this)
    this.newTodo = true
  }
  handleSave (text) {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  render () {
    return (
      <header className="header">
        <h1>任务管理</h1>
        <TodoTextInput
          newTodo={this.newTodo}
          onSave={this.handleSave}
          placeholder="今天的任务是?"
        />
      </header>
    )
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header
