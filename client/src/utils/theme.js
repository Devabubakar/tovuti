export const getTheme = (theme) => {
  theme === 'light'
    ? {
        background: '#fff',
        color: 'hsla(0, 0%, 0%, 0.8)',
        secondary: 'hsla(0, 0%, 0%, 0.7)',
        muted: 'hsla(0, 0%, 0%, 0.6)',
        borderColor: '#eee',
        borderHoverColor: 'transparent',
      }
    : {
        background: '#121212',
        color: 'hsla(0, 0%, 100%, 0.87)',
        secondary: 'hsla(0, 0%, 100%, 0.75)',
        muted: 'hsla(0, 0%, 100%, 0.60)',
        borderColor: 'hsla(0, 0%, 100%, 0.60)',
        
      };
};
