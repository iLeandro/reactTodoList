import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import TodoInput from './components/todoInput';
import TodoItem from './components/todoItem';
//import TodoCheck from './components/todoCheck';
import Logo from './logo.svg';

//import { Alert, Button} from 'reactstrap';

import { Alert, Panel, Tooltip, ProgressBar, Popover, OverlayTrigger, Button, Pager, ButtonGroup, ButtonToolbar, FormControl, FormGroup, Navbar, NavItem, MenuItem, Nav, NavDropdown } from 'react-bootstrap';

import { Notification } from 'react-notification';

// const customButtonStyle = (
//   <div>
//     <style type="text/css">{`
//     .btn-custom {
//         background-color: purple;
//         color: white;
//     }
//     `}</style>
//     <Button bsStyle="custom">Custom</Button>
//   </div>
// )


const popoverRight = (
  <Popover id="popover-positioned-right" title="Popover right">
    <strong>Holy guacamole!</strong> Check this info!
  </Popover>
);


const tooltip = (
  <Tooltip id="tooltip">
    <strong>Holy guacamole!</strong> Check this info!s
  </Tooltip>
);


// const i = 0
// for (i = 0; i < 100; i++) {

// }
// const now = {i};


class App extends Component {
  constructor(props) {
    super(props);


    this.state = {
      isActive: false,
      permanentNotification: false,

      todos: [
      {id: 0, text: "Learn to make a React React app please dude!"},
      {id: 1, text: "Learn to make a React React app please dude!"},
      {id: 2, text: "Learn to make a React React app please dude!"}
      ],
      nextId: 3
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  toggleNotification() {
    this.setState({
      isActive: !this.state.isActive
    })
  }



    // this.state = {
    //   todos: [
    //     {id: 0, text: "Learn to make a React React app please dude!"},
    //     {id: 1, text: "Learn to make a React React app please dude!"},
    //     {id: 2, text: "Learn to make a React React app please dude!"}
    //   ],
    //   nextId: 3
    // };

  //   this.addTodo = this.addTodo.bind(this);
  //   this.removeTodo = this.removeTodo.bind(this);
  // }

  addTodo(todoText) {
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextId, text: todoText});
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    });
  }

  removeTodo(id) {
    this.setState({
        todos: this.state.todos.filter((todo, index) => todo.id !== id)
      });
  }

  render() {
    const { isActive } = this.state;
    return (
      <div className="App">

        <div className="navbarLeo">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">React-Bootstrap</a>
            </Navbar.Brand>
              <Navbar.Toggle />
          </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#">
                  Link
                </NavItem>

                <NavItem eventKey={2} href="#">
                  Link
                </NavItem>

                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Action</MenuItem>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>Separated link</MenuItem>
               </NavDropdown>
             </Nav>

            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Link Right
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link Right
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
        <br/>


    

        <ProgressBar bsStyle="success" active now={45} />


        <div>
        <button
          onClick={this.toggleNotification.bind(this)}
          children={!isActive ? "Show notification" : "Hide notification"}
        />
        <br />
        <button
          onClick={() => this.setState({
            permanentNotification: true
          })}
          children="Show permanent notification"
        />
        <Notification
          isActive={this.state.isActive}
          message="Notification"
          action="Dismiss"
          title="Title!"
          dismissAfter = {6000}
          onDismiss={this.toggleNotification.bind(this)}
          onClick={() =>  this.setState({ isActive: false })}
        />
        <Notification
          isActive={this.state.permanentNotification}
          dismissAfter={false}
          message="Permanent Notification"
          title="Title!"
        />
      </div>



        <Alert bsStyle="danger" dismissAfter={2000}>
          Appear when Input is null or > 40 characters
        </Alert>
      
        <FormControl
          type="text"
          value={this.state.value}
          placeholder="Enter text"
          onChange={this.handleChange}
        />


        <div className="todo-wrapper">
          <div className="logoImage">
            <img src={Logo}  alt={"Logostipo"}/>
          </div>
          <Header />
          <br/>
          <TodoInput todoText="" addTodo={this.addTodo} />
          <br/>
          <ul>
            {
              this.state.todos.map((todo) => {
              return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo} />
              })         
            }           
          </ul>

          <ButtonToolbar>
            <ButtonGroup>
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>4</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
    <br/>
       <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Brand</a>
          </Navbar.Brand>

          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>{' '}

            <Button type="submit">Submit</Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>

    <div className="pagerItem">
    <Pager>
      <Pager.Item previous href="#">Previous</Pager.Item>{' '}
      <Pager.Item next href="#">Next</Pager.Item>
    </Pager>
    </div>


    <Panel bsStyle="primary">
      <Panel.Heading>
        <Panel.Title componentClass="h3">Header Title</Panel.Title>
      </Panel.Heading>
      <Panel.Body>Content Body</Panel.Body>
    </Panel>

    <ButtonToolbar>
    <OverlayTrigger placement="right" overlay={tooltip}>
      <Button bsStyle="default">Holy guacamole!</Button>
    </OverlayTrigger>
  </ButtonToolbar>


      <ButtonToolbar>
        <OverlayTrigger trigger="click" placement="right" overlay={popoverRight}>
          <Button>Holy guacamole!</Button>
        </OverlayTrigger>
      </ButtonToolbar>
      </div>
    );
  }
}

export default App;
