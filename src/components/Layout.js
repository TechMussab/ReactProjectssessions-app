import React, {createContext, useContext, useState} from "react";
// import Header from "./Header";
// import Speakers from "./Speakers";

export const ThemeContext=createContext();

function Layout({startingTheme,children})
{
    console.log(children)
    const [theme, setTheme] = useState(startingTheme);
    return (
        <ThemeContext.Provider value={{setTheme, theme}}>
            <div
                className={
                    theme === "light" ? "container-fluid light" : "container-fluid dark"
                }
            >
                {
                    children
                }
            </div>
        </ThemeContext.Provider>
    );
}

export default Layout;
