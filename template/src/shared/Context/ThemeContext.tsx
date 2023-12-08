import React, {createContext, useState, ReactNode, useContext} from 'react';
import {lightTheme, darkTheme} from '../Theme';
import {Theme} from 'types';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme?: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: lightTheme,
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const toggleTheme = () => {
    setTheme(prevTheme =>
      prevTheme.name === 'light' ? darkTheme : lightTheme,
    );
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  return useContext(ThemeContext);
}
