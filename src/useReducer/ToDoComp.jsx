import React, { useReducer, useState } from 'react';
import ToDoList from './ToDoList';

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
}

const reducer = (todos, action) =>{
  const {type, payload} = action;
  switch(type){

    case ACTIONS.ADD_TODO:
      return [newToDo(payload.name), ...todos];

    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === payload.id) return {...todo, complete: !todo.complete}
        return todo
      });
    
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== payload.id)
      
    default:
      return todos
  }
}

const newToDo = (taskName) => {
  return {id: Date.now(), name: taskName, complete: false}
}


const ToDoComp = ()=>{
  const [todos, dispatch] = useReducer(reducer,[])
  const [task, setTask] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch({type: ACTIONS.ADD_TODO, payload: {name: task}})
    setTask('')
  }

  console.log(todos)

  const toggleTask = (id) => {
    dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id}})
  }

  const deleteTask = (id) => {
    dispatch({type: ACTIONS.DELETE_TODO, payload: {id}})
  }

  return(
    <div style={{marginTop: '1rem'}}>
      <p>To-do</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </form>

        {
          todos.map((todo) => <ToDoList key = {todo.id} todo = {todo} dispatch = {dispatch}/>)
        }
    </div>

  )
}

export default ToDoComp;