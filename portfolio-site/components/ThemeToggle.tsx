import { useState, useEffect } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark'); // Default to dark mode

  useEffect(() => {
    // Check localStorage for stored theme or use dark mode by default
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    } else {
      document.documentElement.classList.add('dark'); // Default to dark mode
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full bg-gray-200 p-2 transition-all duration-300 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
    >
      {theme === 'dark' ? (
        <BsSun className="text-xl text-yellow-400" />
      ) : (
        <BsMoon className="text-xl" />
      )}
    </button>
  );
};

export default ThemeToggle;
