import React from 'react';
import Header from './Header'
import Item from './Item'
import Footer from './Footer'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import * as filter from './filter'  //*为取出的变量作为filter的属性
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: filter.ALL,
    }
  }
  changeFilter = (filter) => {
    this.setState({ filter })
  }
  render() {
    let todos = this.props.model.todos
    let activeTodoCount = todos.reduce((count, todo) =>
      count + (todo.completed ? 0 : 1), 0)
    let completedTodoCount = todos.length - activeTodoCount
    let showTodos = todos.filter((todo) => {
      switch (this.state.filter) {
        case filter.ACTIVE:  //显示未完成
          return !todo.completed
        case filter.COMPLETED:  //显示已完成
          return todo.completed
        default:
          return true
      }
    })
    let main = (
      <ul className='list-group'>
        {
          todos.length > 0 ? <li className='list-group-item'>
            <input type='checkbox'
              checked={activeTodoCount === 0}
              onChange={this.props.model.toggleAll} />
            {activeTodoCount === 0 ? '反选' : '全选'}
          </li> : null
        }
        {
          showTodos.map((todo, index) =>
            <Item key={index}
              todo={todo}
              toggle={this.props.model.toggle}
              remove={this.props.model.remove} />
          )
        }
      </ul>
    )
    return (
      <div className='container'>
        <div className='row'>
          <div className="col-md-3"></div>
          <div className='col-md-6'>
            <div className='panel panel-default'>
              <div className='panel-header'>
                <Header addToDo={this.props.model.addToDo} />
              </div>
              <div className='panel-body'>
                {main}
              </div>
              <div className='panel-footer'>
                <Footer activeTodoCount={activeTodoCount}
                  changeFilter={this.changeFilter}
                  filter={this.state.filter}
                  clearCompleted={this.props.model.clearCompleted}
                  completedTodoCount={completedTodoCount} />
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    )
  }
}

export default App;
