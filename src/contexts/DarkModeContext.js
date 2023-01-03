import { useState, createContext, useContext } from "react";

const DarkModeContext = createContext();

const mode = localStorage.getItem("mode")
  ? JSON.parse(localStorage.getItem("mode"))
  : false;

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(mode);

  localStorage.setItem("mode", JSON.stringify(isDarkMode));

  const values = {
    isDarkMode,
    setIsDarkMode,
  };

  return (
    <DarkModeContext.Provider value={values}>
      {children}
    </DarkModeContext.Provider>
  );
}

const useDarkMode = () => useContext(DarkModeContext);

export { DarkModeProvider, useDarkMode };
