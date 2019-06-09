import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  if (typeof window !== 'undefined') {
    const [darkMode, setDarkMode] = useState(
      localStorage.getItem('darkMode') === 'true' ? true : false
    );

    useEffect(() => {
      toggleDarkMode(darkMode);
    }, [darkMode]);

    return [darkMode, setDarkMode];
  }
  return;
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
