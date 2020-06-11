import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const localStoragedDarkMode = getDarkModeStatus();

  const [darkMode, setDarkMode] = useState(localStoragedDarkMode);

  useEffect(() => {
    toggleDarkMode(darkMode);
  }, [darkMode]);

  return [darkMode, setDarkMode];
};

function toggleDarkMode(isItdark) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('darkMode', isItdark);
    if (isItdark) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }
}

function getDarkModeStatus() {
  const isBrowser = typeof window !== 'undefined';
  if (isBrowser) {
    if (localStorage.getItem('darkMode') === null) {
      const darkModeMediaQuery = window.matchMedia(
        '(prefers-color-scheme: dark)'
      );
      return darkModeMediaQuery.matches;
    } else {
      return JSON.parse(localStorage.getItem('darkMode'));
    }
  }

  return false;
}
