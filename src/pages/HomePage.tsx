import Casque from "../assets/pictures/casque.png"
import Avion from "../assets/pictures/avion-en-papier.png"
import { NavLink } from "react-router";
import "../styles/homePage.css";

export default function HomePage() { 
    return (
        <div className="homepage-contenaire">
           <h1>&lt;Matthieu /&gt;</h1> 
           <h2>&lt;Boussel /&gt;</h2>
           <article className="footer">
            <div className="nav-item">
               <NavLink to="/passions" className="nav-link">
         <img
              className="projectImage"
              src={Casque}
              alt="icone representant une tête portant un casque"
            />
            <span>&lt;Passions /&gt;</span>
     </NavLink>
     </div>
     <article className="avion-contact">
                 <div className="nav-item">
               <NavLink to="/contact" className="nav-link">
         <img
              className="projectImage"
              src={Avion}
              alt="icone representant un avion en papier"
            />
            <span>&lt;Contact /&gt;</span>
     </NavLink>
     </div>
     </article>
     </article>
     </div>
      
    )
}