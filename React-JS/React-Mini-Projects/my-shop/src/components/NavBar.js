import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';

export default function NavBar() {
    const { theme, setTheme } = useContext(ThemeContext);
    console.log(theme);

    let themeStyle = {};

    if (theme === 'light'){
        themeStyle = {
            background: "white",
            color: '#333'
        };
    }else{
        themeStyle = {
            background: "#333",
            color: 'white'
        };
    }
    
  return (
    <nav style={themeStyle} onClick={() => setTheme('dark')}>
    <h1>My-Shop</h1>
    <div className='spacer'></div>
    <NavLink to="/home">Home</NavLink>
    <NavLink to="/contact">Contact</NavLink>
    <NavLink to="/products">Products</NavLink>
  </nav>
  )
}
