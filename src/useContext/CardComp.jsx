import React from 'react'

const CardComp = () =>{

  return(
    <div style = {{width: '150px', height: '100px', marginTop: '1.5rem'}} >
      <div style={{marginBottom: '0.5rem'}} >Details</div>
        <label>Name:</label> Moody
        <br></br>
        <label>Age:</label>
        25
        <br></br>
        <label>Address:</label>
        Mumbai
    </div>
  )
}

export default CardComp;