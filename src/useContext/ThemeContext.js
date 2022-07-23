import React, {createContext, useContext, useState} from 'react';

const ThemeContext = createContext();
const ThemeUpdateContext= createContext();

export const useTheme = () => useContext(ThemeContext);

export const useUpdateTheme = () => useContext(ThemeUpdateContext)

export const ThemeProvider = ({children}) => {

  const [dark, setDark] = useState(true)
  const toggleDark = () => setDark(prevTheme => !prevTheme)

  return(
    <ThemeContext.Provider value = {dark} >
      <ThemeUpdateContext.Provider value={toggleDark} >
      {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )

}