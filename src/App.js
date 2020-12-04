import React, { Component } from 'react';
import {addtask} from './actions';
import {connect} from 'react-redux';
import List from './components/List'
class App extends Component {

  handleOnChange=(e)=>{
     
    this.setState({task:[e.target.value]});

  }

  handleClick=(e)=>{

    e.preventDefault();

    let task = e.target.userInput.value;
    console.log(task)
    this.props.dispatch(addtask(task));
    e.target.userInput.value=''

  }

  handleDelete=(task)=>{
    // use filter to filter out task from array
    console.log('')

  }
  render() {
    console.log('Inside APP Component',this.props)
    console.log('renders')
    return (
      <div>
      <form onSubmit={(e)=>this.handleClick(e)}>
        <input type="text" name="userInput"/>
        <button>Submit</button>
      </form>
      <List />
      </div>
          );
  }
}

function mapStateToProps(state){
  console.log('map state to props',state.todo.tasks)
  return {
    tasks:state.todo.tasks,

  }
}

export default connect (mapStateToProps)(App);