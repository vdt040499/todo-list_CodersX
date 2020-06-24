import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem'
class App extends React.Component {

  constructor() {
    super();
    this.toDoItems = ['Eat', 'Sleep', 'Code'];
  }

  render() {
    return (
      <div className="App">
          {
            this.toDoItems.map((item, index) => <TodoItem key={index} title={item} />)
          }
      </div>
    );
  }
}

export default App;
