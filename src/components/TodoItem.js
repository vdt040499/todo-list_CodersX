import React from 'react';
import classNames from 'classnames';
import checkImg from '../imgs/check.svg';
import checkCompletedImg from '../imgs/check_complete.svg';

import './TodoItem.css';

class TodoItem extends React.Component {

    render() {
        const { item, onClick } = this.props;
        let url = checkImg;

        if(item.isComplete) {
            url = checkCompletedImg;
        }

        return  (
            <div className= {classNames('TodoItem',{
                TodoItem_complete: item.isComplete
            })}>
                <img onClick={onClick} src={url} width={32} />
                <p>{item.title}</p>
            </div>
        );
    }
}

export default TodoItem;
