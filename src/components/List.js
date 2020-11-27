import React from 'react'


function List(props) {

    console.log("List Props",props)
    return (
        <ul>
             { props.tasks.map((task,index)=>(
                <li key={index}>{task}</li>
            ))}
        </ul>
    )
}


export default List