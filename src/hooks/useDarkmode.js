import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [darkMode, setDarkMode] =
    typeof window === 'undefined'
      ? useState(false)
      : useState(localStorage.getItem('darkMode') === 'true' ? true : false);

  useEffect(() => {
    toggleDarkMode(darkMode);
  }, [darkMode]);

  return [darkMode, setDarkMode];
};

function toggleDarkMode(isItdark) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('darkMode', JSON.stringify(isItdark));
    if (isItdark) {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  }
}
