import React from 'react';
import useDarkMode from "../hooks/useDarkMode"



const Nav = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);




  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
    console.log("clicked dark")
  };
  
  return (
    <div>
    <nav className="navbar">
      <h1>World Cup Players</h1>
      <div className="dark-mode__toggle">
        <button onClick={toggleMode}>DarkMode </button>
      </div>
    </nav>
    </div>
  );
};

export default Nav;