import { useState } from 'react';
 
function ProjectCard({ name, description, url, image }) {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
 
  const toggleDescription = () => {
    setIsDescriptionVisible((prev) => !prev);
  };
 
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
 
      <button onClick={toggleDescription}>
        {isDescriptionVisible ? 'Hide Description' : 'Show Description'}
      </button>
 
      {isDescriptionVisible && <p>{description}</p>}
 
      <a href={url}>View Project</a>
    </div>
  );
}
 
export default ProjectCard;
 