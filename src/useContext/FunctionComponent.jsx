import React from "react";
import CardComp from "./CardComp";
import { useTheme, useUpdateTheme } from "./ThemeContext";

const FunctionComp = ()=>{
  const darkTheme = useTheme();
  const toggleTheme = useUpdateTheme();

  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#ccc',
    color: darkTheme ? '#ccc' : '#333',
    width: '200px',
    heught: '200px',
    padding: '2rem',
    margin: '2rem',
  }

  return(
    <>
      <button style = {{margin: '1rem', padding: '0.5rem'}}
       onClick = {
        ()=>{ 
          toggleTheme();
          console.log(darkTheme);
        }}
       >
        Toggle Theme
       </button>


      <div style={themeStyles} >
        {'Function Component'}
        <CardComp/>
      </div>
    </>
  )
}

export default FunctionComp;