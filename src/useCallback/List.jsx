import React, { useEffect, useState } from "react";

const List = (props) =>{
  const {getItems} = props;
  const [items, setItems] = useState([])

  useEffect(()=>{
    setItems(getItems(5)); // in case we have use useCallback , we can also pass arguments
    // setItems(getItems); // in case we have use useMemo
    console.log('Updating Items');
  }, [getItems])

  return(
    <>
    {items.map((item) => <div key={item} >{item}</div>)}
    </>
  )
}

export default List;