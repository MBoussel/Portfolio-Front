import "../styles/cardProject.css";

type Skills = {
  id: number;
  nom: string;
  logo: string;
};

type CardProjectProps = {
  titre: string;
  description: string;
  image: string;
  url: string;
  skills?: Skills[];
};

export default function CardProject({ titre, description, image, url, skills = [] }: CardProjectProps) {
  return (
    <div className="project-card">
      
      <div className="project-content">
        <h4 className="project-title">{titre}</h4>
        <p className="project-description">{description}</p>
        <div className="project-image-contenaire">
        <img src={image} alt={titre} className="project-image" />
        </div>
        <a href={url} className="project-link" target="_blank" rel="noopener noreferrer">
          Voir le projet
        </a>
        <div className="project-skills">
          {skills.map((skill) => (
            <i key={skill.id} className={`${skill.logo} colored`} title={skill.nom}></i>
          ))}
        </div>
      </div>
    </div>
  );
}