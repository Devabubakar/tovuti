import * as React from 'react';

const useTheme = () => {
  //get theme from localstorage
  const storedTheme =
    typeof window !== 'undefined' && window.localStorage.getItem('theme');
  //set theme
  const [theme, setTheme] = React.useState( 'dark');
  //toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === 'light' ? 'dark' : 'light';
    });
  };

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return [theme, toggleTheme];
};

export default useTheme;
