import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem'
class App extends React.Component {

  constructor() {
    super();
    this.toDoItems = [
      { title: 'Mua sì nách', isComplete: true },
      { title: 'Đi đá bóng' },
      { title: 'Đi đổ xăng' }
    ];
  }

  render() {
    return (
      <div className="App">
          {
            this.toDoItems.map((item, index) => 
              <TodoItem key={index} item={item} />
            )
          }
      </div>
    );
  }
}

export default App;
