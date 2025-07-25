import { Outlet } from 'react-router'
import './App.css'
import { useDarkMode } from "./contexts/ThemeContext";
import Navbar from './components/Navbar';
import 'devicon/devicon.min.css';

function App() {
 const { theme } = useDarkMode();

  return (
    <main className={theme === "dark" ? "dark" : "light"}>
      <Navbar/>
  <Outlet/>
    </main>
  )
}

export default App
