import React, { createContext } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ value, children }) {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
