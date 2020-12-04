import React from 'react'
import {connect} from 'react-redux';



class List extends React.Component {


     render(){
       console.log('this List props', this.props)
       const {tasks} = this.props
     
    return (
        <ul>
            <div>{tasks.map((item)=>(<div>{item}</div>))}</div>
        </ul>
    )
}
}


function mapStateToProps(state){
    console.log('Map State to props under List',state)
    return {

      tasks:state.todo.tasks,
  
    }
  }
export default connect(mapStateToProps)(List)