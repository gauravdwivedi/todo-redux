import {ADD_TASK, REMOVE_TASK} from '../actions';

const intitalState={
    tasks:[]
}

export function todo(state=intitalState,action){
    switch (action.type){
        case ADD_TASK:

            console.log('Add task reducer called',state.tasks)

            return {
                tasks:[...state.tasks,action.task]
            }
        case REMOVE_TASK:
            {
                let newTasks = state.tasks.filter((item)=>item!==action.task)
                return {
                    tasks:newTasks
                }
            }
         
        default:
            return state;
    }
}

export default todo