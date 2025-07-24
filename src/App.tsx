import { Outlet } from 'react-router'
import './App.css'
import { useDarkMode } from "./contexts/ThemeContext";
import Navbar from './components/Navbar';

function App() {
 const { theme } = useDarkMode();

  return (
    <main className={theme === "dark" ? "light" : "dark"}>
      <Navbar/>
  <Outlet/>
    </main>
  )
}

export default App
