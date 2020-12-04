// action type
export const ADD_TASK='ADD_TASK';
export const REMOVE_TASK='REMOVE_TASK'
export const EDIT_TASK= 'EDIT_TASK'

export function addtask(task){
    console.log('Inside ass task action',task)
    return {
        type:ADD_TASK,
        task
    }
}

export function removeTask(task){
    return {
        type:REMOVE_TASK,
        task
    }
}

export function editTask(task){
    return{
        type:EDIT_TASK,
        task
    }
}