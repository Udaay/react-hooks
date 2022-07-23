import React, { useCallback, useMemo, useState } from 'react';
import List from './List';

const CallbackDemo = ()=>{
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(true);

  const themeStyles = {
    backgroundColor: dark ? '#333' : '#ccc',
    color: dark ? '#ccc' : '#333',
    // width: '100px',
    heught: '25px',
    padding: '0.2rem',
    margin: '0.2rem',
  }

  /**
   * Changing theme was also effect into running of useEffect() of List Component
   * which causes to render of the component even though data still remain the same.
   * 
   * because every time we change number, getNumber get created with new refrence
   */

  // const getNumber = ()=>{
  //   return [number, number + 1, number + 2]
  // }

  /**
   * By using useCallback useEffect of List will only run when number get updated 
   */
  const getNumber = useCallback((incrementBy)=>{
    return [number + incrementBy, number + 1 + incrementBy, number + 2 + incrementBy]
  },[number])

  /**
   * Major diffrence between useMemo and useCallback is that , useMemo return the memoized return value from the function which is passed.
   * and useCallback return the whole function which is passed to useCallback
   * 
   * Both need Dependancy Array as the second parameter.
   */

  // const getNumber = useMemo(()=>{
  //   return [number, number + 1, number + 2]
  // },[number])

  return(
    <div style={themeStyles}>
      <input
        type = 'number'
        value={number}
        onChange={
          (e)=>{
            setNumber(parseInt(e.target.value))
          }
        }
      />
      <br />
      <button
      style={{margin: '0.5rem 0', padding: '0.6rem'}}
        onClick = {
          ()=>{
            setDark(dark => !dark)
          }
        }
      >
        Change Theme
      </button>
      <List getItems = {getNumber}/>
    </div>
  )
}

export default CallbackDemo;