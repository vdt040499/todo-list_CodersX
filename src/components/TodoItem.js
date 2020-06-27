import React from 'react';
import './TodoItem.css';
class TodoItem extends React.Component {
    render() {
        const { item } = this.props;
        let className = 'TodoItem';

        if (item.isComplete) {
            className += ' TodoItem-complete';
        }

        return  (
            <div className= {className}>
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}

export default TodoItem;
