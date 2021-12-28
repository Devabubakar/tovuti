import React from 'react';
import { ThemeProvider as EmotionProvider, Global, css } from '@emotion/react';
import ThemeContext from '../context/theme.context';
import useTheme from '../hooks/useTheme';
import { getTheme } from '../utils/theme';

const ThemeProvider = ({ children }) => {
  const [theme, toggleTheme] = useTheme();
  const darkTheme = getTheme('dark');
  const currentTheme = getTheme('dark');
  const { color } = currentTheme;
  return (
    <ThemeContext.Provider value={(theme, toggleTheme)}>
      <EmotionProvider theme={currentTheme}>
        <Global
          styles={css({
            html: {
              scrollbarColor:
                theme === 'dark'
                  ? `${darkTheme.muted} ${darkTheme.background}`
                  : 'auto',
            },
            body: {
              backgroundColor: currentTheme.background,
            },
          })}
        />
        <div
          style={css({
            color,
            zIndex: 1,
            transition: 'ease-in-out 500ms ',
            overflow: 'hidden',
           
          })}
        >
          {children}
        </div>
      </EmotionProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
