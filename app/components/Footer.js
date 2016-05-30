import React, {PropTypes, Component} from 'react'
import classnames from 'classnames'
import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../constants/TodoFilters'

const FILTER_TITLES = {
  [SHOW_ALL]: '全部',
  [SHOW_ACTIVE]: '待完成',
  [SHOW_COMPLETED]: '已完成'
}

class Footer extends Component {
  // 渲染任务数量
  renderTodoCount () {
    const {activeCount} = this.props
    return (
      <span className="todo-count">
        剩余任务 <strong>{activeCount || '0'}</strong> 条
      </span>
    )
  }
  // 渲染任务过滤
  renderFilterLink (filter) {
    const title = FILTER_TITLES[filter]
    const {filter: selectedFilter, onShow} = this.props
    return (
      <a
        className={classnames({
          selected: filter === selectedFilter
        })}
        style={{cursor: 'pointer'}}
        onClick={() => onShow(filter)}
      >
        {title}
      </a>
    )
  }

  // 清楚完成的任务
  renderClearButton () {
    const {completedCount, onClearCompleted} = this.props
    if (completedCount > 0) {
      return (
        <button
          className="clear-completed"
          onClick={onClearCompleted}
        >
          清除完成的任务
        </button>
      )
    }
  }

  render () {
    return (
      <footer className="footer">
        {this.renderTodoCount()}
        <ul className="filters">
          {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(filter =>
            <li key={filter}>
              {this.renderFilterLink(filter)}
            </li>
          )}
        </ul>
        {this.renderClearButton()}
      </footer>
    )
  }
}

Footer.propTypes = {
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired
}

export default Footer
