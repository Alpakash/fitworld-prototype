import React, { createContext, useState } from 'react'

const CreateThemeContext = createContext();

/*
 1. First make the ThemeContext state (themes available in project)
 2. Make the themeState available in a global state (GlobalStateContext) - Redux idea without Redux
        - Uses reducers and actions
        - Update the ...state with a reducer - make reducers for different stuff
        - e.g. lib/reducers/theme or lib/reducers/language
*/

const ThemeContext = (props) => {
  const [theme, setTheme] = useState("light" | "dark" | "")

  return (
    <CreateThemeContext.Provider value={theme}>
      {props.children}
    </CreateThemeContext.Provider>
  )
}

export default ThemeContext