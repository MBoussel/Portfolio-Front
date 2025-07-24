import { NavLink } from "react-router";
import "../styles/navbar.css";
import DarkModeButton from "./DarkModeButton";
import ProjectsImage from "../assets/pictures/www.png"
import SkillsImage from "../assets/pictures/macbook.png"
import CVImage from "../assets/pictures/cv.png"
export default function Navbar() {
return(
    <nav className="navbardiv">
         <div className="nav-item">
    <NavLink to="/projects" className="nav-link">
         <img
              className="projectImage"
              src={ProjectsImage}
              alt="icone representant un WWW (internet)"
            />
            <span>&lt;Projects /&gt;</span>
     </NavLink>
     </div>

     <div className="nav-item">
     <NavLink to="/skills" className="nav-link">
      <img
              className="projectImage"
              src={SkillsImage}
              alt="icone representant Macbook"
            />
            <span>&lt;Skills/&gt;</span>
     </NavLink>
     </div>
     <div className="nav-item">
     <NavLink to="/CV" className="nav-link">
      <img
              className="projectImage"
              src={CVImage}
              alt="icone representant un C.V"
            />
            <span>&lt;C.V/&gt;</span>
           
     </NavLink>
     </div>
   <div className="nav-item">
     <DarkModeButton/>
     <span>&lt;DarkMode /&gt;</span>
   </div>
     </nav>
    
)
}