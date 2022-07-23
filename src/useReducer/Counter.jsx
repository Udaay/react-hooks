import React, { useReducer } from 'react';

const ACTIONS = {
  INCREMENT: 'incr',
  DECREMENT: 'dec'
}

const reducer = (state, action) =>{
  switch(action.type){

    case ACTIONS.INCREMENT:
      return {val: state.val + 1}

    case ACTIONS.DECREMENT:
      return {val: state.val - 1}

    default:
      return state
  }
}

const Counter = ()=>{

  const [state, dispatch] = useReducer(reducer,{val: 0})

  const incr = () => dispatch({type : ACTIONS.INCREMENT});

  const decr = () => dispatch({type: ACTIONS.DECREMENT});

  return(
    <div style={{marginTop: '1rem'}}>
      <p>Using use Reducer</p>
      <button onClick={decr} >-</button>
      <span style={{margin: '0.5rem', padding: '0.5rem'}} >{state.val}</span>
      <button  onClick = {incr} >+</button>
    </div>

  )
}

export default Counter;