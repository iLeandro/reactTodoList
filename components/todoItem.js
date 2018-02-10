import React from 'react';
import './todoItem.css';

export default class TodoItem extends React.Component {

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    return (
      <div className="todoWrapper">  
      <div className="todoCheck">
        <label className="container">
            <input type="checkbox"/>
            <span className="checkmark"></span>
        </label>
        </div>
         
        <button className="removeTodo" onClick={(e)=> this.removeTodo(this.props.id) }>Remove</button>{this.props.todo.text} 
        
        
      </div>
    );
  }
}
