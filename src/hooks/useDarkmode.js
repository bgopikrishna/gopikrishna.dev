import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const localStoragedDarkMode =
    typeof window === 'undefined'
      ? false
      : localStorage.getItem('darkMode') === 'true'
      ? true
      : false;

  const [darkMode, setDarkMode] = useState(localStoragedDarkMode);

  useEffect(() => {
    toggleDarkMode(darkMode);
  }, [darkMode]);

  return [darkMode, setDarkMode];
};

function toggleDarkMode(isItdark) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('darkMode', JSON.stringify(isItdark));
    if (isItdark) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }
}
