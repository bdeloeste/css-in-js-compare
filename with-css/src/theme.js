import React from "react";

export const themes = {
  primary: "primary",
  secondary: "secondary"
};

export const ThemeContext = React.createContext({
  theme: themes.primary,
  toggleTheme: () => {}
});
