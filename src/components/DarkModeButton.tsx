import { useDarkMode } from "../contexts/ThemeContext";
import Switch from "../assets/pictures/interrupteur.png";
import "../styles/darkModeButton.css";

export default function DarkModeButton() {
  const { theme, toggleTheme } = useDarkMode();
  return (
    <button
      className="buttonDark buttonLight"
      onClick={toggleTheme}
      type="button"
    >
      {theme === "dark" ?  <img src={Switch} alt="Switch_Icon" /> : <img src={Switch} alt="Switch_Icon" /> }
    </button>
  );
}