import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

function ThemeContextProvider({children}) {
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")))

    const toggleMode = () => {
        setDarkMode(!darkMode)
        localStorage.setItem("darkMode", !darkMode)
    }
  return (
    <ThemeContext.Provider value={{darkMode, setDarkMode, toggleMode}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider