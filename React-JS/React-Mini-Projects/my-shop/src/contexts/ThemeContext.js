import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider(props){
    const [theme, setTheme ] = useState('light');

    return (
    <ThemeContext.Provider value={ {theme, setTheme} }>
       {props.children}
    </ThemeContext.Provider>)
}