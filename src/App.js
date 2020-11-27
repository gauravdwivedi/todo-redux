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

  }
  render() {
    console.log('Inside APP Component',this.props)
    const {tasks} =this.props
    return (
      <div>
      <form onSubmit={(e)=>this.handleClick(e)}>
        <input type="text" name="userInput"/>
        <button>Submit</button>
      </form>
      <List tasks={tasks}/>
      </div>
          );
  }
}

function mapStateToProps(state){
  return {
    tasks:state.tasks,

  }
}

export default connect (mapStateToProps)(App);