import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem'
import tick from './imgs/tick.svg';
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      // newItem: '',
      toDoItems: [
        { title: 'Mua sì nách', isComplete: true },
        { title: 'Đi đá bóng', isComplete: false },
        { title: 'Đi đổ xăng', isComplete: true }
      ]
    }

    this.onKeyUp = this.onKeyUp.bind(this); 
    // this.onChange = this.onChange.bind(this);
  }

  onItemClicked(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const { toDoItems } = this.state;
      const index = toDoItems.indexOf(item);
      this.setState({
        toDoItems: [
          ...toDoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...toDoItems.slice(index + 1)
        ]
      });
    }
  }

  onKeyUp(event) {
    if (event.keyCode === 13) { //enter key
      let text = event.target.value;

      if(!text) {
        return;
      }

      text = text.trim();

      if(!text) {
        return;
      }

      this.setState({
        newItem: '',
        toDoItems: [
          {
            title: text,
            isComplete: false
          },
          ...this.state.toDoItems
        ]
      });
      event.target.value = '';
    }
  }

  // onChange(event) {
  //   this.setState({
  //     newItem: event.target.value
  //   });
  // }

  render() {
    // const { toDoItems, newItem } = this.state;
    const { toDoItems } = this.state;
    return(
      <div className="App" >
        <div className="Header">
          <img src={tick} width={20}/>
          <input 
            type="text" 
            placeholder="Add a new item" 
            // value={newItem}
            // onChange={this.onChange}
            onKeyUp={this.onKeyUp}
          ></input>
        </div>
        {toDoItems.length !== 0 && toDoItems.map((item, index) => {
          return <TodoItem 
                  key={index} 
                  item={item}
                  onClick={this.onItemClicked(item)}
                  />
        })}

        {toDoItems.length === 0 && 'Nothing here!'}
      </div>   
    ); 
  }
}

export default App;
