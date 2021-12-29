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
    <EmotionThemeProvider theme={currentTheme}>
    <Global
      styles={css({
        html: {
          scrollbarColor:
            theme === 'dark'
              ? `${darkTheme.muted} ${darkTheme.background}`
              : 'auto',
        },
        body: {
          // for rubber band effect in Chrome on MacOS
          // and outside the scaled div with background color
          backgroundColor: currentTheme.background,
        },
      })}
    />
   
    <div
      css={{
        color,
        
        zIndex: 1,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  </EmotionThemeProvider>
  );
};

export default ThemeProvider;
