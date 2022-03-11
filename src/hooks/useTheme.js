import {useState} from "react";


function useTheme(startingTheme='light')
{
    const [theme,setTheme]=useState(startingTheme)
    function validateTheme(themeValue)
    {
        (themeValue==='light')?setTheme('light'):setTheme('dark');
    }
    return{
        theme,
        setTheme:validateTheme,
    };
}
export default useTheme;
