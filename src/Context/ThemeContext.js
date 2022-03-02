import { createContext, useState, useContext } from "react";
import { ThemeProvider as StyledComponentThemeProvider } from "styled-components";

const themes = {
  dark: {
    backgroundColor: "black",
    buttonbg: "white",
    buttoncolor: "black",
    color: "white",
  },
  light: {
    backgroundColor: "white",
    buttonbg: "black",
    buttoncolor: "white",
    color: "black",
  },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const theme = isDark ? themes.dark : themes.light;

  const toggleTheme = () => {
    setIsDark((currentIsDark) => !currentIsDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <StyledComponentThemeProvider theme={theme}>
        {children}
      </StyledComponentThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
