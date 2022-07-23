import React, {useState, useMemo, useEffect} from "react";

//This function will run on every render. and as it take lot of time to execute.
//On changing Theme also , our component will rerender which will be slow because of this slowFunction
const slowFunction = (number) => {
  for(let i = 0; i<= 1000000000; i++) {} // To Mimic A Heavy Process which takes a lot of time for computation
  return number * 2
}

const MemoComp = () => {
  const [inputNumber, setNumber] = useState('');
  const [dark, setDark] = useState(true);

  /**
   * This will compute of every render of Component irrrespective of dark is same as previous Value or it's a new Value
   */
  // const themeStyles = {
  //   backgroundColor: dark ? '#333' : '#ccc',
  //   color: dark ? '#ccc' : '#333',
  //   width: '200px',
  //   heught: '200px',
  //   padding: '2rem',
  //   margin: '2rem',
  // }

  /**
   * Case 2.
   * This will update themeStyles only when dark is changed and will skip this compute if dark is same as previousValue.
   */
  const themeStyles = useMemo(() => ({
    backgroundColor: dark ? '#333' : '#ccc',
    color: dark ? '#ccc' : '#333',
    width: '200px',
    heught: '200px',
    padding: '2rem',
    margin: '2rem',
  }), [dark])

  useEffect(()=>{
    /**
     * This console will print on every Theme CHnage which is expected.
     * But on inputNumber Chnage also it will print, because every time component render will get get new themeStyles Object in term of refrential equality,
     * as JS compare based on the address of the object (Refrential Eqaulity)
     * even we have same value inside the object it will treat as diffrent object
     * To tackle this we have wrap out themeStyles around useMemo
     */
    console.log('Theme Changed')
  }, [themeStyles])

  // const doubleNumber = slowFunction(inputNumber)


  /**
   * Case1: to memoize heavy computation
   */
  // this will only run when our inputNUmber will be diffrent than previous inputNumber Value
  // Also this will not execute while we are changing out Theme
  const doubleNumber = useMemo(()=>{ 
    return slowFunction(inputNumber);
  }, [inputNumber])  

  return(
    <div>
      <input
        type= 'number'
        value = {inputNumber}
        onChange = {
          (e) => setNumber(parseInt(e.target.value))
        }
      />
      <br />
      <button
      style = {{margin: '1rem', padding: '0.5rem'}}
        onClick={
          () => setDark(prevTheme => !prevTheme)
        }
      >
        Change Theme
      </button>
      <div style={themeStyles} >{doubleNumber}</div>
    </div>
  )
}

export default MemoComp