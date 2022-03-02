import { createContext, useState, useContext } from "react";
import { ThemeProvider as StyledComponentThemeProvider } from "styled-components";

const themes = {
  dark: {
    backgroundColor: "black",
    buttonbg: "white",
    buttonActivebg: "#f9cf47",
    buttonColor: "black",
    buttonActiveColor: "#fff",
    color: "white",
  },
  light: {
    backgroundColor: "white",
    buttonbg: "black",
    buttonActivebg: "#f9cf47",
    buttonColor: "white",
    buttonActiveColor: "#fff",
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
