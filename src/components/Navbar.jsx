import React, { useEffect } from 'react';
import useDarkMode from "../hooks/useDarkMode";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  const theBody = document.querySelector("body")
  useEffect(() => {
    theBody.classList.contains("dark-mode") ? (theBody.classList.remove("dark-mode")): theBody.classList.add("dark-mode");
  }, [darkMode])

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
