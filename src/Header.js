import React from 'react';
class Header extends React.Component {
    handleKeyDown = (e) => {
        if (e.keyCode === 13 && e.target.value != null && e.target.value.length > 0) { //enter
            let title = e.target.value
            this.props.addToDo({ title })
            e.target.value = ''  //输入框清空
        }
    }
    render() {
        return (
            <div className='form-group'>
                <h1 style={{'textAlign': 'center', 'marginBottom': '20px'}}>待办事项</h1>
                <input type='text' 
                className='form-control' 
                placeholder='输入后按回车保存' 
                autoFocus={true} 
                onKeyDown={this.handleKeyDown}></input>
            </div>
        )
    }
}
export default Header;