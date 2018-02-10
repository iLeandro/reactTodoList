import React from 'react';
import './todoInput.css';

//import { Alert, Button } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.todoText};

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  addTodo(todo) {
    // Ensure a todo was actually entered before submitting
    if (todo.length > 0 && todo.length < 32) {
      // <Alert bsStyle="danger">
      //   This is a danger alert — check it out!s
      // </Alert>
      this.props.addTodo(todo);
      this.setState({value: ''});
    }
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <Button bsStyle="info" onClick={() => this.addTodo(this.state.value)}>Submit</Button>
      </div>
    );
  }
}
