import React, { useMemo } from "react";
import { useDeferredValue } from "react";

const ListComp = ({input})=>{
  /**
   * AS input is getting change very frequently and and it causes rerender which make our app laggy and sluggish because we are rendering long list
   * So we gonna deferred the input value which is like debouncing in which react itself make decision that its been while that input has not changed so lets's render.
   */
  const deferredInput = useDeferredValue(input)
  const len = 20000;
  const list = useMemo(() => {
    const l = []
    for(let i =0;i<len;i++){
      l.push(deferredInput)
    }
    return l;
  },[deferredInput])

  return(
    <>
    {list.map((val, i) => <div key = {i} >{val}</div>)}
    </>
  )
}

export default ListComp;