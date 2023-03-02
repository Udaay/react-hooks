import React, {useState} from "react"
import ListComp from "./ListComp"

const UseDeferredComp = ()=>{
  const [input, setInput] = useState('')
  const handleChange = (e)=>{
    setInput(e.target.value)
  }
  return(
    <>
    <input value = {input} onChange={handleChange} />
    <ListComp input = {input} />
    </>
  )
}

export default UseDeferredComp;