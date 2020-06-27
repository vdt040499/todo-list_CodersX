import React from 'react';
import classNames from 'classnames';

import './TodoItem.css';
class TodoItem extends React.Component {
    render() {
        const { item } = this.props;

        //1st way
        // let className = 'TodoItem';

        // if (item.isComplete) {
        //     className += ' TodoItem-complete';
        // }

        //2nd way using classnames

        let className = classNames({
            TodoItem: true,
            'TodoItem-complete': item.isComplete
        });

        return  (
            <div className= {className}>
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}

export default TodoItem;
