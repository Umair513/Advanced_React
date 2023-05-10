import "./Styles.css"
import { useTheme } from "../ThemeContext"

const Switch = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <label className="Switch">
            <input type="checkbox" checked={theme === "light"} onChange={toggleTheme}></input>
            <span className="slider round"></span>
        </label>
    )
}

export default Switch;