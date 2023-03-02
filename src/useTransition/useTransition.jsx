import React, {useState, useTransition} from 'react'


const UseTransisitionComp = ()=>{
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition()

  // const handleChange = (e)=> {
  //   //HIgh Priority
  //   setValue(e.target.value);

  //   //LowPriority
  //   const l = [];
  //   for (let i =0; i< 20000 ; i++){
  //     l.push(e.target.value);
  //   }
  //   console.log(l)
  //   setList(l);
  // }

  /**
   * by using useTransition our componenet will render twice.
   */
  const handleChange = (e)=> {
    //HIgh Priority
    setValue(e.target.value); // 1st render

    //LowPriority
    startTransition(() => {
      const l = [];
      for (let i =0; i< 20000 ; i++){
        l.push(e.target.value);
      }
      console.log(l)
      setList(l); // 2nd render
    })
  }

  return(
    <>
    <input
      value = {value}
      onChange = {handleChange}
      />
    {isPending ? (<div>Loading.....</div>) : list.map((l,i) => <div key = {i} >{l}</div>)}
    </>
  )
}

export default UseTransisitionComp;