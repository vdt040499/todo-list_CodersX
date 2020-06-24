import React from 'react';

class TodoItem extends React.Component {
    render() {
        return <p>{this.props.title}</p>
    }
}

export default TodoItem;
