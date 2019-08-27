import React from 'react';
import * as filter from './filter'  //*为取出的变量作为filter的属性

class Footer extends React.Component {
    render() {
        return (
                <div className='row' style={{ 'textAlign': 'center', 'marginTop': '10px' }}>

                    <div className="col-md-4" style={{ 'textAlign': 'left' }}>
                        {
                            this.props.activeTodoCount > 0 ?
                                <button className="btn btn-primary" type="button">
                                    你有 <span className="badge">{this.props.activeTodoCount}</span> 件待办
                                </button>
                                : null
                        }
                    </div>

                    <div className="col-md-5">
                        <button className={`${this.filter === filter.ALL ? 'btn-success' : 'btn-default'} btn-sm`} onClick={() => this.props.changeFilter(filter.ALL)} style={{ 'margin': '0 5px' }}>全部</button>
                        <button className={`${this.filter === filter.ACTIVE ? 'btn-success' : 'btn-default'} btn-sm`} onClick={() => this.props.changeFilter(filter.ACTIVE)} style={{ 'margin': '0 5px' }}>未完成</button>
                        <button className={`${this.filter === filter.COMPLETED ? 'btn-success' : 'btn-default'} btn-sm`} onClick={() => this.props.changeFilter(filter.COMPLETED)} style={{ 'margin': '0 5px' }}>已完成</button>
                    </div>

                    <div className="col-md-3" style={{ 'textAlign': 'right' }}>
                        {
                            this.props.completedTodoCount > 0 ?
                                <button className='btn btn-danger' onClick={this.props.clearCompleted}>删除已完成</button>
                                : null
                        }
                    </div>

                </div>
        )
    }
}
export default Footer;