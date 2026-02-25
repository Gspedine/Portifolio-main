import React, { createContext, useContext, useState, useEffect } from 'react';
// Usa localStorage no navegador em vez de AsyncStorage (React Native)

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const darkTheme = {
  primary: '#00d4ff',
  secondary: '#00ffc2',
  bg: '#0b132b',
  card: '#1a2236',
  text: '#f0f4ff',
  textSecondary: '#b0c4ff',
  border: '#00d4ff30',
  buttonText: '#0b132b',
  avatarBorder: '#00d4ff',
  glow: '0 0 20px #00d4ff50',
};

const lightTheme = {
  primary: '#006ba6',
  secondary: '#009688',
  bg: '#f5faff',
  card: '#ffffff',
  text: '#0b132b',
  textSecondary: '#4a6fa5',
  border: '#006ba640',
  buttonText: '#ffffff',
  avatarBorder: '#006ba6',
  glow: '0 0 15px #006ba650',
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const value = window.localStorage.getItem('theme');
        return value !== null ? value === 'dark' : true;
      }
    } catch (e) {
      // fallback padrão
    }
    return true;
  });

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
      }
    } catch (e) {
      // falha silenciosa
    }
  }, [isDark]);

  const theme = isDark ? darkTheme : lightTheme;
  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};