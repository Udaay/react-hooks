import React from 'react';
import { ACTIONS } from './ToDoComp';

const ToDoList = ({todo, dispatch})=> {
  const {name, complete, id} = todo;
  return(
    <div 
      style={{
        display: 'flex',
        width: '280px',
        justifyContent: 'space-between',
        padding: '0.5rem'
      }} 
    >
      <span style={{color: complete ? '#AAA': 'black'}} >
        {name}
      </span>
      <div 
        style={{
          display: 'flex',
          columnGap: '10px'
        }}
       >
        <button onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id}})} >toggle</button>
        <button onClick={() =>  dispatch({type: ACTIONS.DELETE_TODO, payload: {id}})} >delete</button>
      </div>
    </div>
  )
}

export default ToDoList;