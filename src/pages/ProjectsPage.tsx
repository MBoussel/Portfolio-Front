import axios from "axios";
import Slider from "../components/Swiper";
import "../styles/projects.css";
import { useEffect, useState } from "react";

type Skills = {
  id: number;
  nom: string;
  logo: string;
};

type Project = {
  id: number;
  titre: string;
  description: string;
  image: string;
  url: string;
  skills: Skills[];
};

export default function ProjectsPage() { 

    const [projects, setProjects] = useState<Project[]>([]);
    useEffect(() => {
  axios.get('http://localhost:6767/api/projects-with-skills')
       .then(res => {
      setProjects(res.data); 
    })
    .catch(err => console.error(err));
}, []);

    return (
        <div>
            <h3 className="title-project">&lt;Mes Projets /&gt;</h3>
           <Slider key={projects.length} projects={projects}/>
            
        </div>
    )
}