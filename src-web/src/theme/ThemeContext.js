import React, { createContext, useState } from 'react'

const ThemeContext = createContext('light');

/*
 1. First make the ThemeContext state (themes available in project)
 2. Make the themeState available in a global state (GlobalStateContext) - Redux idea without Redux
        - Uses reducers and actions
        - Update the ...state with a reducer - make reducers for different stuff
        - e.g. lib/reducers/theme or lib/reducers/language
*/

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(props.value)

  return (
    <ThemeContext.Provider value={theme}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider